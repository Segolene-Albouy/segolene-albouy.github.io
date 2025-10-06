function createSimulationHandlers(simulation) {
  return {
    tick: (link, node, label = null) => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      if (label) {
        label
          .attr("x", d => d.x)
          .attr("y", d => d.y);
      }
    },

    dragstarted: (event) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    },

    dragged: (event) => {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    },

    dragended: (event) => {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
  };
}