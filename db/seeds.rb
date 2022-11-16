Event.destroy_all
puts "seeding events..."
event1 = Event.create(title: "Soup Kitchen", start_date_time: "Sat Nov 19 2022 12:00:00 GMT-0400", end_date_time: "Sat Nov 19 2022 21:00:00 GMT-0400", location: "1337 W 11th St, Tempe, AZ 85281", category: "community", description: "Join our church in helping the homeless sleep with a full stomach today. Make conversation and make a difference.")
event2 = Event.create(title: "Jones Beach Cleaning", start_date_time: "Sun Nov 20 2022 10:00:00 GMT-0400", end_date_time: "Sun Nov 20 2022 15:00:00 GMT-0400", location: "1 Ocean Pkwy, Wantagh, NY 11793", category: "environmental", description: "Help us clean the beaches in a 2 for 1 deal. Help the environment while helping the community!")
event3 = Event.create(title: "NSALA Shelter", start_date_time: "Sat Nov 19 2022 10:00:00 GMT-0400", end_date_time: "Sat Nov 19 2022 15:00:00 GMT-0400", location: "25 Davis Ave, Port Washington, NY 11050", category: "animal", description: "Dog walkers are needed. Please help us out and make a friend.")
event4 = Event.create(title: "Central Park Cleaning", start_date_time: "Sat Nov 26 2022 12:00:00 GMT-0400", end_date_time: "Sat Nov 26 2022 12:00:00 GMT-0400", location: "Central Park S &, 6th Ave, New York, NY 10019", category: "environmental", description: "Keep the park clean to keep Central Park beautiful.")
event5 = Event.create(title: "Hurricane Relief", start_date_time: "Sat Dec 3 2022 8:00:00 GMT-0400", end_date_time: "Sat Dec 3 2022 18:00:00 GMT-0400", location: "4132 Peters Rd, Harvey, LA 70058", category: "disaster relief", description: "All hands on deck! We need as many people we can get to get NOLA back on its feet.")
event6 = Event.create(title: "UC San Diego Health", start_date_time: "Sun Dec 4 2022 9:00:00 GMT-0400", end_date_time: "Sun Dec 4 2022 12:00:00 GMT-0400", location: "200 West Arbor Drive
San Diego, CA 92103", category: "hospital", description: "Come and learn about what goes on in a hospital. Be an important cog in this machine that save lives.")
event7 = Event.create(title: "Serengeti Wildlife Conservation", start_date_time: "Sat Dec 3 2022 8:00:00 GMT-0400", end_date_time: "Sat Dec 31 2022 18:00:00 GMT-0400", location: "Bwitengi Village, Tanzania", category: "wildlife conservation", description: "These beautiful animals can be majestic and powerful but they are still no match for poachers. We will do everything we can to keep them safe. Air travel is not provided but we will pick you up from the airport.")
event8 = Event.create(title: "San Diego Zoo Conservation", start_date_time: "Sun Dec 11 2022 8:00:00 GMT-0400", end_date_time: "Sun Dec 11 2022 18:00:00 GMT-0400", location: "2920 Zoo Dr, San Diego, CA 92101", category: "zoo conservation", description: "Everyone here has a passion for animals from elephants to cats. If you have the same love in your heart as we do you are perfect for the job.")
event8 = Event.create(title: "Hurricane Relief", start_date_time: "Sun Dec 18 2022 8:00:00 GMT-0400", end_date_time: "Sun Dec 18 2022 20:00:00 GMT-0400", location: "5155 I-37 North, Corpus Christi, TX 78408, La Quinta Hotel parking lot", category: "disaster relief", description: "This community has been hit hard. Houses are damaged, flooded, or destroyed. Help clean debry, help victims, and in the future we can rebuild.")
event9 = Event.create(title: "Cincinnati Zoo Conservation", start_date_time: "Sun Dec 11 2022 8:00:00 GMT-0400", end_date_time: "Sun Dec 11 2022 18:00:00 GMT-0400", location: "3400 Vine St, Cincinnati, OH 45220", category: "zoo conservation", description: "When nature has been harsh to these animals we need to be kind to them. Help us help the animals rehabilitate.")
event10 = Event.create(title: "Animal Haven Shelter", start_date_time: "Sun Dec 11 2022 14:00:00 GMT-0400", end_date_time: "Sun Dec 11 2022 18:00:00 GMT-0400", location: "200 Centre St, New York, NY 10013", category: "animal", description: "Everyone can do their part. Small or large contributions help us save more lives.")

Volunteer.destroy_all
puts "seeding volunteers..."
user1 = Volunteer.create(first_name: "Chris", last_name: "Ou", email: "chrisou@yahoo.com", password: "Helper")
user2 = Volunteer.create(first_name: "Steve", last_name: "Rogers", email: "America@gmail.com", password: "ICouldDoThisAllDay")
user3 = Volunteer.create(first_name: "Tony", last_name: "Stark", email: "IAmIronMan@yahoo.com", password: "TonyStank3000")

Signup.destroy_all
puts "seeding signups..."
signup1 = Signup.create(event: event1, volunteer: user3, task: "Server")
signup2 = Signup.create(event: event2, volunteer: user1, task: "Cleaner")
signup3 = Signup.create(event: event3, volunteer: user2, task: "Dog walker")