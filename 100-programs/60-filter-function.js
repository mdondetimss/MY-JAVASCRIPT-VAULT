let emails =[
    {subject: 'July Payslips', lables:['payslips']},
    {subject: 'Scanned copies 2', lables:['certificates','id proofs']},
    {subject: 'Upcoming event', lables:['events']}
]

let events = emails.filter(email => email.lables.includes("events"))

console.log(events)