/* Your Code Here */

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr){
   return arr.map(employee => {
         return createEmployeeRecord(employee)
    })
}

function createTimeInEvent(date){
    this.timeInEvents.push({
        type: 'TimeIn',
        date: date.slice(0,-5),
        hour: parseInt(date.slice(-4))
    })
    return this
}

function createTimeOutEvent(date){
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: date.slice(0,-5),
        hour: parseInt(date.slice(-4))
    })
    return this
}

function hoursWorkedOnDate(date){
    const inTime = this.timeInEvents.find((e) => e.date === date)
    const outTime = this.timeOutEvents.find((e) => e.date === date)
  
    return (outTime.hour - inTime.hour) / 100
  }

function wagesEarnedOnDate(date){
    const time = hoursWorkedOnDate.call(this,date)
    return this.payPerHour * time
}


//  and reduce here
// function allWagesFor(){
//     const days = this.timeInEvents.map(day => {
//         return day.date  
//     });
    
//    return days.reduce((day) => {
//         total += wagesEarnedOnDate(day.date)  
//     },0)
// }

function findEmployeeByFirstName(srcArray, firstNameString){
    return srcArray.find((employee) => {
        if(employee.firstName === firstNameString){
            return employee
        } else{
            return undefined
        }

    })
}

function calculatePayroll(array){
    let total = 0
    array.forEach((record) => {
       total += allWagesFor.call(record)
    })
    return total
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

