{
	$id: {
		id: 0,
		location: 'indoor', //[table, indoor, outdoor, nature, anywhere]
		agegroup: 'cube, scout, rover, adult, anybody'
		playersMin: 5,
		playersMax: 0,
		activityType: ['running', 'learning'], //[running, sitting, memory, learning, antiboredom, folk, skills, strength, winter, night, linegame, informalgames, emergencygame, icebreaker]
		difficulty: 'no', //[no, simple, medium, complicated]
		playtimeMin: 5, //min
		playtimeMax: 30,
		accessories: [...],
		title: '',
		howToIntroduce: '',
		preparation: ''
		shortDescription: '', // if missing, then use first sentence of description
		description: '',
		tips: '',
		closing: '',
		comment: '', // array of comment and user id
		drawing: 'url',
		source: 'this and this book', // source id


		author: $userId,
		dateAdded: 130132454213,
		dateModified: 130132454213,
		variations: [gameId, ...],
		parentGame: gameId,
		likes: [{
			stars: 5,
			userId: $userId
		}]
		revisioned: $userId // user checked this game
	}
}