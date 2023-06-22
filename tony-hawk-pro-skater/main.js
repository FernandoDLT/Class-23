// Create a Tony Hawk Pro Skater constructor that makes fighting game characters with
// 4 properties and 3 methods

function TonyHawkGuy(chName,chStance,chSponsor,chMove) {
    this.character = chName
    this.stace = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove
    this.flip = function() {
        console.log('Kickflip!!')
    }
    this.taunt = function() {
        console.log(`Don't make me use my ${this.specialMove}`)
    }
    this.grab = function() {
        console.log('MELON GRAAAAB')
    }
}
let kareemCampbell = new TonyHawkGuy('Kareem','Goofy','Element','Ghetto Bird')