
function htmlTitle(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}

function convertData(inputData) {
    const nodes = [];
    const edges = [];
    let nodeIdCounter = 1;
    // TODO: rework to prevent XSS attacks
    function addNode(question, parentId = null) {
      const nodeId = nodeIdCounter++;
      let title= "Question: "+question.question+"</br> Answer: "+question.answer;
      nodes.push({ id: nodeId, label: "",title:htmlTitle(title) });
  
      if (parentId !== null) {
        edges.push({ from: parentId, to: nodeId });
      }
  
      if (question.follow_up) {
        if (Array.isArray(question.follow_up)) {
          question.follow_up.forEach(followUpQuestion => addNode(followUpQuestion, nodeId));
        } else {
          addNode(question.follow_up, nodeId);
        }
      }
  
      return nodeId;
    }

    const rootNodeId = nodeIdCounter++;
    let title= "Topic: "+inputData["initial_prompt"];
    nodes.push({ id: rootNodeId, label:"" , title:htmlTitle(title) });
  
    addNode(inputData.questions, rootNodeId);
    console.log("nodes",nodes);
    console.log("edges",edges);
    return {
      nodes: new vis.DataSet(nodes),
      edges: new vis.DataSet(edges)
    };
  }
  
export { convertData };