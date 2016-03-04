//1. What is the lenth of the following contacts array?



//2. Add the following people to the contacts array.

var contacts = [
{
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
},{
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
},{
	name: 'Chris Hoyd',
	email: 'chris.hoyd@boisecodeworks.com',
	title: 'founder'
},{
	name: 'Tony Carolla',
	email: 'tony.carolla@gmail.com',
	title: 'mentor'
},{
	name: 'Andrew Hansen',
	email: 'andrew.hansen@gmail.com',
	title: 'mentor'
},{
	name: 'Stefan Nuxoll',
	email: 'stefan.nuxoll@gmail.com',
	title: 'mentor'
}];


//3. Woops after adding all of those people to the same contacts list you realized you need a list just the mentors. Create a new variable named mentors populate it using contacts array. 
var mentors =[];
for(i=0; i< contacts.length; i++){
    if(contacts[i].title === 'mentor'){
        mentors.push(contacts[i])
    }
}
