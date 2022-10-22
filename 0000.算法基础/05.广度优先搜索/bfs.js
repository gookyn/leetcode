/**
 * 广度优先搜索（Breadth-First Search，简称 BFS）
 *
 * 在朋友中寻找关系最近的芒果经销商
 *
 * 思路：
 * 1、先实现朋友关系图
 * 2、创建队列，用于存储要检查的人
 * 3、从队列中弹出一个人，检查是否是芒果经销商
 * 4、如果是，则返回当前人；如果不是，则将这个人的所有朋友加入这个队列
 * 5、回到第 3 步，继续查找，直到找到芒果经销商或者整个朋友关系中都没有
 *
 * 注意：不要重复检查同一个人，避免造成循环
 */

/**
 * 实现图，模拟朋友关系
 */
const friendsGraph = () => {
  const graph = {};

  graph['you'] = ['alice', 'bob', 'claire'];
  graph['bob'] = ['anuj', 'peggy'];
  graph['alice'] = ['peggy'];
  graph['claire'] = ['thom', 'jonny'];
  graph['anuj'] = [];
  graph['peggy'] = [];
  graph['thom'] = [];
  graph['jonny'] = [];

  return graph;
};

// console.log(friendsGraph());

/**
 * 实现算法
 */
const bfs = (graph) => {
  // 用数组模拟一个查询队列
  let searchQueue = [];

  // 将邻居加入到这个查询队列
  searchQueue = searchQueue.concat(graph['you']);

  // 当前检索的人
  let person = null;

  // 记录已查询过的人
  const searched = [];

  // 只要队列不为空就继续执行
  while (searchQueue.length) {
    // 弹出队列中的第一个人
    // 注意：是当前队列中的第一个人，并且要更新队列（FIFO）
    person = searchQueue.shift();

    // 注意：当前人没有查询过时才执行
    if (!searched.includes(person)) {
      // 判断当前人是否为芒果经销商
      if (personIsSeller(person)) {
        // 如果是，返回当前人，不再查询
        return person;
      } else {
        // 如果不是，则将其朋友也加入到队列
        // 注意：是加入到队列后面
        searchQueue = searchQueue.concat(graph[person]);
        // 将当前人标记为已查询过
        searched.push(person);
      }
    }
  }

  // 没有找到
  return null;
};

// 判断是否是芒果经销商
function personIsSeller(name) {
  console.log(name);
  // 假设姓名以 'm' 结尾的是芒果经销商
  return name.charAt(name.length - 1) === 'm';
}

const mangoSeller = bfs(friendsGraph());
console.log('mango seller: ', mangoSeller);
// mango seller:  thom

/**
 * 再次注意：在检查一个人之前，一定要判断是否检查过！！！
 *
 * - 如果没有判断，以上的查询将依次为：alice、bob、claire、peggy、anuj、peggy、thom
 * - 但实际应该是：alice、bob、claire、peggy、anuj、thom
 *
 * > peggy 同属于 bob 和 alice 的朋友
 *
 * 如果 graph['peggy'] = [‘alice’, 'bob'] 就会造成无限循环！！！
 */
