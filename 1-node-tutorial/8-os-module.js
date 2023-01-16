// Operator system module

const os = require('os'); // import built in module

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in secnds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
    names : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOs);