function validIPAddresses(digits, octets = [], validIps = []) {
    // Write your code here.
    const numDigits = digits.length;
    const numGroup = octets.length;
    const maxRemain = 12 - numGroup * 3;
    const minRemain = 4 - numGroup;
  
    if (numDigits > maxRemain || numDigits < minRemain) {
      return [];
    } else if (!numDigits) {
      validIps.push(octets.join("."))
    }
  
    for (let i=1; i <= Math.min(4, numDigits); i++) {
      const octet = digits.slice(0,i);
      const truncDigits = digits.slice(i);
  
      if (Number(octet) > 255) continue;
      if (octet.length > 1 && octet[0] === '0') continue;
  
      const addNewOctet = [...octets, octet];
      validIPAddresses(truncDigits, addNewOctet, validIps)
    }
    return validIps
  }