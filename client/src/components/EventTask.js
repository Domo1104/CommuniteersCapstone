function EventTask({category, selectedTask, setSelectedTask}) {
    console.log(category);
    if (category === "community") {
        return (
        <select className='tasks' value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
            <option> Select your role...</option>
            <option value="Cook">Cook</option>
            <option value="Server">Server</option>
            <option value="Transportation">Transportation</option>
            <option value="Floor manager">Floor Manager</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Donatations">Donations</option>
            <option value="Any role">Fill any role needed</option>
        </select>
    )} else if (category === "environmental") {
        return (
        <select className='tasks' value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
            <option> Select your role...</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Volunteer lead">Volunteer Lead</option>
            <option value="Transportation">Transportation</option>
            <option value="Bring Supplies">Bring supplies</option>
            <option value="Water and cooler">Water and cooler</option>
            <option value="First responder">First responder</option>
            <option value="Donatations">Donations</option>
            <option value="Any role">Fill any role needed</option>
        </select>
    )} else if (category === "animal") {
        return (
        <select className='tasks' value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
            <option> Select your role...</option>
            <option value="Dog talker">Dog walker</option>
            <option value="Dog trainer">Dog trainer</option>
            <option value="Groomer">Groomer</option>
            <option value="Feline enrichment">Feline enrichment</option>
            <option value="Canine enrichment">Canine enrichment</option>
            <option value="Kennel cleaner">Kennel cleaner</option>
            <option value="Kennel associate">Kennel associate</option>
            <option value="Donatations">Donations</option>
            <option value="Any role">Fill any role needed</option>
        </select>
    )} else if (category === "hospital") {
        return (
        <select className='tasks' value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
            <option> Select your role...</option>
            <option value="Volunteer nurse">Volunteer Nurse</option>
            <option value="Cashier">Cashier</option>
            <option value="Inventory">Inventory</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Socialize with patients">Socialize with patients</option>
            <option value="Therapy dog handler">Therapy dog handler</option>
            <option value="Greeter">Greeter</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Donatations">Donations</option>
            <option value="Any role">Fill any role needed</option>
        </select>
    )} else if (category === "disaster relief") {
        return (
            <select className='tasks' value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
            <option> Select your role...</option>
            <option value="First responder">First responder</option>
            <option value="Transportation">Transportation</option>
            <option value="Clean up crew">Clean up crew</option>
            <option value="Food Donations">Food Donations</option>
            <option value="Supply donations">Supply donations</option>
            <option value="Medical donations">Medical donations</option>
            <option value="Any role">Fill any role needed</option>
        </select>
    )} else if (category === "wildlife conservation") {
        return (
            <select className='tasks' value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
            <option> Select your role...</option>
            <option value="Field research">Field research</option>
            <option value="Endangered species conservation">Endangered species conservation</option>
            <option value="Conservation training">Conservation training</option>
            <option value="Wildlife educator">Wildlife educator</option>
            <option value="Outreach specialist">Outreach specialist</option>
            <option value="Wildlife Law Enforcement Officer">Wildlife Law Enforcement Officer</option>
            <option value="Wildlife Inspector and Forensics Specialist">Wildlife Inspector and Forensics Specialist</option>
            <option value="Food Donations">Food Donations</option>
            <option value="Supply donations">Supply donations</option>
            <option value="Medical donations">Medical donations</option>
            <option value="Any role">Fill any role needed</option>
        </select>
    )}
}

export default EventTask