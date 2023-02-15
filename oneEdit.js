function oneEdit(stringOne, stringTwo) {
  // Write your code here.
  const [longer, shorter] = stringOne.length > stringTwo.length ? [stringOne, stringTwo] : [stringTwo, stringOne];
  if (Math.abs(longer - shorter) > 1) return false

  for (let i=0; i<longer.length; i++) {
    if (longer[i] !== shorter[i]) {
      if (longer.slice(i) === shorter.slice(i+1)) return true;
      if (longer.slice(i+1) === shorter.slice(i)) return true;
      if (longer.slice(i+1) === shorter.slice(i+1)) return true;
      return false
    }
  }
  return longer.length - shorter.length < 2
}
