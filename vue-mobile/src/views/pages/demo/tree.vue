<template>
  <div class="tree" id="container" ref="tree"></div>
</template>

<script>
  import * as d3 from 'd3';
  import trees from '../trees.json'
  const data = [99, 71, 78, 25, 36, 92];
  export default {
    name: 'non-vue-line-chart',
    template: '',
    data() {
      return {
        data: []
      }
    },
    created() {
      this.data = []
      this.data.push(trees)
      //console.log(this.data)
    },
    mounted() {
      this.showData()
      //this.showData2()
    },
    methods: {
      showData() {
        console.log(6666)
        console.log(d3)
        const svg = d3.select(this.$refs.tree)
          .append('svg')
          .attr('width', "100%")
          .attr('height', "5rem")
          .append('g')
          .attr('transform', 'translate(0, 10)');
        const x = d3.scaleLinear().range([0, 430]);
        const y = d3.scaleLinear().range([210, 0]);
        d3.axisLeft().scale(x);
        d3.axisTop().scale(y);
        x.domain(d3.extent(data, (d, i) => i));
        y.domain([0, d3.max(data, d => d)]);
        const createPath = d3.line()
          .x((d, i) => x(i))
          .y(d => y(d));
        svg.append('path').attr('d', createPath(data));
      },
      showData2() {
        console.log(d3)
        console.log(this.data)
        console.log(d3.hierarchy(this.data))
        const width = 411
        const radius = width / 2
        const tree = d3.cluster().size([2 * Math.PI, radius - 100])
        console.log(tree)
        const root = tree(d3.hierarchy(this.data)
          .sort((a, b) => (a.height - b.height) || a.data.name.localeCompare(b.data.name)));

        const svg = d3.select(this.$refs.tree)
          .append('svg')
          .attr('width', "100%")
          .attr('height', 500)
          .append('g')
          .attr('transform', 'translate(0, 10)');

        const g = svg.append("g");

        const link = g.append("g")
          .attr("fill", "none")
          .attr("stroke", "#555")
          .attr("stroke-opacity", 0.4)
          .attr("stroke-width", 1.5)
          .selectAll("path")
          .data(root.links())
          .enter().append("path")
          .attr("d", d3.linkRadial()
            .angle(d => d.x)
            .radius(d => d.y));

        const node = g.append("g")
          .attr("stroke-linejoin", "round")
          .attr("stroke-width", 3)
          .selectAll("g")
          .data(root.descendants().reverse())
          .enter().append("g")
          .attr("transform", d => `
              rotate(${d.x * 180 / Math.PI - 90})
              translate(${d.y},0)
            `);

        node.append("circle")
          .attr("fill", d => d.children ? "#555" : "#999")
          .attr("r", 2.5);

        node.append("text")
          .attr("dy", "0.31em")
          .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
          .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
          .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
          .text(d => d.data.name)
          .filter(d => d.children)
          .clone(true).lower()
          .attr("stroke", "white");

        return autosize(svg.node());
        function autosize(svg) {
          document.body.appendChild(svg);
          const box = svg.getBBox();
          document.body.removeChild(svg);
          svg.setAttribute("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);
          return svg;
        }

      }

    }
  };
</script>

<style>
  svg {}
</style>