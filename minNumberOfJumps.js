function minNumberOfJumps(array) {
    return dfs(array, 0, 0, Infinity)
}

function dfs(nums, idx=0, jumps, minJumps) {
    if (idx === nums.length-1) return jumps
    if (!nums[idx] || idx > nums.length -1) return Infinity;

    for (let i = 1; i<=nums[idx]; i++) {
        const currentMin = dfs(nums, idx+i, jumps+1, minJumps)
        minJumps = Math.min(currentMin, minJumps)
    }

    return minJumps === Infinity ? -1 : minJumps
}