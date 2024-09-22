function displayEmployeeInfo(employeeList, targetName) {
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === targetName) {
        return `Name : ${employeeList[i].name} Position : ${employeeList[i].position}`;
      }
    }
    return `Employee with name ${targetName} not found.`;
  }
  
  const employeeList = [
    { name: "Arm", position: "Front End" },
    { name: "Game", position: "Back End" }
  ];
  
  console.log(displayEmployeeInfo(employeeList, "Janny")); 
  console.log(displayEmployeeInfo(employeeList, "Game"));  
  