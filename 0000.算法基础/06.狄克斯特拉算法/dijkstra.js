/**
 * 狄克斯特拉算法（Dijkstra's algorithm）
 *
 * 计算最快路径
 *
 * https://livebook.manning.com/book/grokking-algorithms/chapter-7/1
 *
 * 思路：
 * 1、创建三个散列表
 *    - 关系及权重表：包含所有节点的图，由于需要记录关系和权重，因此创建一个双重嵌套的散列表
 *    - 开销表：从起点出发前往每个节点需要的最短时间
 *    - 父节点表：存储到达每个节点最近的父节点散列表
 * 2、在未处理的节点中找出开销最小的节点
 * 3、获取当前节点的开销和邻居
 * 4、遍历当前节点的所有邻居，如果经当前节点到达该邻居更近（开销更小），则更新该邻居的开销；
 *    同时将该邻居的父节点更新为当前节点
 * 5、标记当前节点已处理过
 * 6、重复执行 2-5，直到所有节点都被处理过
 *
 * 经由起点到达终点的最快路径，即可以从最终的父节点表中找出，最短时间即为开销表中终点的开销
 */

// 各站点关系及权重图
const stationGraph = () => {
  // 双重嵌套散列表
  const graph = {};

  // 起点的邻居及权重
  graph['start'] = {};
  graph['start']['a'] = 6;
  graph['start']['b'] = 2;

  // a 节点的邻居及权重
  graph['a'] = {};
  graph['a']['fin'] = 1;

  // b 节点的邻居及权重
  graph['b'] = {};
  graph['b']['a'] = 3;
  graph['b']['fin'] = 5;

  // 终点的邻居及权重
  graph['fin'] = {};

  // 获取起点的所有邻居
  // Object.keys(graph['start']); // ['a', 'b']

  return graph;
};

// 狄克斯特拉算法
const dijkstra = (stationGraph) => {
  // 各节点开销表
  // 存储从起点到每个节点的最小开销（将不断更新）
  // 开销：从起点出发前往该节点的时间
  const costs = {};
  costs['a'] = 6;
  costs['b'] = 2;
  costs['fin'] = Infinity; // 由于还不知道到达终点的时间，先记为无穷大

  // 父节点表
  // 存储到达每个节点最近的父节点（将不断更新）
  const parents = {};
  parents['a'] = 'start';
  parents['b'] = 'start';
  parents['fin'] = null;

  // 存储已处理过节点的数组
  const processed = [];

  // 在未处理的节点中找出开销最小的节点，记为当前节点
  let node = findLowestCostNode(costs, processed);

  // 当还存在未处理的节点时，继续执行
  while (node) {
    // 当前节点的开销
    const cost = costs[node];

    // 当前节点的所有邻居
    const neighbors = stationGraph[node];

    // 遍历当前节点的所有邻居节点
    Object.keys(neighbors).forEach((n) => {
      // 经由当前节点前往该邻居的开销
      const newCost = cost + neighbors[n];

      // 如果经由当前节点前往该邻居更近
      if (costs[n] > newCost) {
        // 更新该邻居节点的开销
        costs[n] = newCost;
        // 同时将该邻居节点的父节点更新为当前节点
        parents[n] = node;
      }
    });

    // 将当前节点标记为已处理
    processed.push(node);

    // 更新接下来要处理的节点，并循环
    node = findLowestCostNode(costs, processed);
  }

  // 查找开销最低的节点
  function findLowestCostNode(costs, processed) {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    // 遍历所有节点
    for (const node in costs) {
      const cost = costs[node];
      // 如果当前节点没有处理过，并且开销更低，则更新最小开销和最小开销节点
      if (!processed.includes(node) && cost < lowestCost) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }
    return lowestCostNode;
  }

  return {
    costs,
    parents,
  };
};

const result = dijkstra(stationGraph());
console.log(result);

/**
{
  costs: {
    a: 5,
    b: 2,
    fin: 6, // 最短时间：6 分钟
  },
  parents: {
    a: 'b',
    b: 'start',
    fin: 'a', // 最快路径：start -> b -> a -> fin
  },
};
 */
