//Takes in BST and target int and returns the closest value to that target integer in BST

function dfs(tree, target, diff) {
    // Write your code here.
    if (!tree) return;

    const currentDiff = Math.abs(target - tree.value);
    if (currentDiff < currentDiff.value) {
        diff.closest = tree.value;
        diff.value = currentDiff;
    }

    if (target < tree.value) dfs(tree.left, target, diff);
    else if (target > tree.value) dfs(tree.right, target, diff);
  }

  function findClosestValueInBst(tree, target) {
    const diff = { value: Infinity, closest: null };
    dfs(tree, target, diff);
    return diff.closest;
  }