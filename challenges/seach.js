const rootNode = {
  name: "node1",
  children: [
    {
      name: "node2",
      children: [
        {
          name: "node3",
          tag: 251,
        },
      ],
    },
    {
      name: "node4",
      children: [
        {
          name: "node5",
          children: [
            {
              name: "node7",
              children: [
                {
                  name: "node8",
                  children: [
                    {
                      name: "node6",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function search(nameNode, node){
    if (nameNode === node.name) {
        return node;
    } else if (node.children && Array.isArray(node.children)){
        return node.children.reduce((state, node) => {
            return search(nameNode, node) || state;
        }, undefined)
    } else {
        return undefined;
    }
}


console.log(search('node3', rootNode));
console.log(search('node4', rootNode));
console.log(search('node6', rootNode));
console.log(search('node23', rootNode));