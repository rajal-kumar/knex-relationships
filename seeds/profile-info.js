
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, co Profile_pic: '',LName: 'rowValue1'},
        {id: 2, co Profile_pic: '',LName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
// knex('users').insert({user_id: 99901, Profile_pic: '', name: 'Ambitious Aardvark', email: 'aardvark@example.org'}),
// knex('users').insert({user_id: 99902, Profile_pic: '', name: 'Bamboozled Baboon', email: 'baboon@example.org'}),
// knex('users').insert({user_id: 99903, Profile_pic: '', name: 'Curious Capybara', email: 'capybara@example.org'}),
// knex('users').insert({user_id: 99904, Profile_pic: '', name: 'Dilapuser_idated Duck', email: 'duck@example.org'}),
// knex('users').insert({user_id: 99905, Profile_pic: '', name: 'Exuberant Elephant', email: 'elephant@example.org'}),
// knex('users').insert({user_id: 99906, Profile_pic: '', name: 'Fascinated Flying Fox', email: 'flying.fox@example.org'}),
// knex('users').insert({user_id: 99907, Profile_pic: '', name: 'Generous Gila Monster', email: 'gila.monster@example.org'}),
// knex('users').insert({user_id: 99908, Profile_pic: '', name: 'Hilarious Heron', email: 'heron@example.org'}),
// knex('users').insert({user_id: 99909, Profile_pic: '', name: 'Intransigent Impala', email: 'impala@example.org'}),
// knex('users').insert({user_id: 99910, Profile_pic: '', name: 'Jocular Jerboa', email: 'jerboa@example.org'}),
// knex('users').insert({user_id: 99911, Profile_pic: '', name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org'}),
// knex('users').insert({user_id: 99912, Profile_pic: '', name: 'Loquacious Lemur', email: 'lemur@example.org'}),
// knex('users').insert({user_id: 99913, Profile_pic: '', name: 'Misanthropic Mongoose', email: 'mongoose@example.org'}),
// knex('users').insert({user_id: 99914, Profile_pic: '', name: 'Nonchalant Nyala', email: 'nyala@example.org'}),
// knex('users').insert({user_id: 99915, Profile_pic: '', name: 'Ornery Ocelot', email: 'ocelot@example.org'}),
// knex('users').insert({user_id: 99916, Profile_pic: '', name: 'Peaceful Pangolin', email: 'panda@example.org'}),
// knex('users').insert({user_id: 99917, Profile_pic: '', name: 'Querulous Quokka', email: 'quokka@example.org'}),
// knex('users').insert({user_id: 99918, Profile_pic: '', name: 'Resolute Rail', email: 'rail@example.org'}),
// knex('users').insert({user_id: 99919, Profile_pic: '', name: 'Senescent Sloth', email: 'sloth@example.org'}),
// knex('users').insert({user_id: 99920, Profile_pic: '', name: 'Tumultuous Terrapin', email: 'terrapin@example.org'}),
// knex('users').insert({user_id: 99921, Profile_pic: '', name: 'Unassailable Urial', email: 'urial@example.org'}),
// knex('users').insert({user_id: 99922, Profile_pic: '', name: 'Voracious Viscacha', email: 'viscacha@example.org'}),
// knex('users').insert({user_id: 99923, Profile_pic: '', name: 'Wondering Wombat', email: 'wombat@example.org'}),
// knex('users').insert({user_id: 99924, Profile_pic: '', name: 'Xenial Xerus', email: 'xerus@example.org'}),
// knex('users').insert({user_id: 99925, Profile_pic: '', name: 'Yielding Yak', email: 'yak@example.org'}),
// knex('users').insert({user_id: 99926, Profile_pic: '', name: 'Zaftig Zebu', email: 'zebu@example.org'})