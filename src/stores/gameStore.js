import { defineStore } from 'pinia';

export const useGameStore = defineStore(`games`, {
    state: () => ({
        //Home oder Game view
        newGameActiv: false,
        newPlayerActive: false,
        //Index
        activeGameIndex:0,
        activePlayerIndex:0,
        //PopUps
        deleteGameActive: false,
        changePlayerActive: false,
        newPlayerActive: false,
        pupUp: "",
        addDoubleActive: false,
        currentGameValue:"",

        doubleRounds:0,
        doubleRoundsActive: false,
        dealer: "",
        games:[
            { 
                id: 1,
                active: true, 
                date: '01.04.2026', 
                rounds: 5,
                gamePoints: [1,3,7,6,3],
                players: [
                    {id: 1, name: "Matthias", points: [-1,2,3,4,0]},
                    {id: 2, name: "Philipp", points: [-1,2,3,4,5]},
                    {id: 3, name: "Peter", points: [-1,2,3,4,-1]},
                    {id: 4, name: "Arthur", points: [3,-2,3,4,5]},
                    {id: 5, name: "Tom", points: [-1,2,3,4,-1]},
                    {id: 6, name: "Maria", points: [3,-2,3,4,5]},
                    {id: 7, name: "Arno", points: [3,-2,3,4,5]},
                ],
            },
            { 
                id: 2,
                active: true, 
                date: '06.04.2026', 
                rounds: 8,
                gamePoints: [1,3,7,6,3,4,6,6],
                players: [
                    {id: 1, name: "Matthias", points: [-1,2,3,4,0,2,1,0]},
                    {id: 2, name: "Philipp", points: [-1,2,3,4,5,2,1,3]},
                    {id: 3, name: "Peter", points: [-1,2,3,4,-1,2,1,6]},
                    {id: 4, name: "Arthur", points: [3,-2,3,4,5,2,1,4]},
                    {id: 5, name: "Maria", points: [3,-2,3,4,5,2,1,4]},
                ],
            },     
        ],
    }),
    actions: {
        changeHomeList(to, index) {
            console.log(to)
            console.log(index)
            this.activeGameIndex = index; 
            this.newGameActiv = to;  
        }, 
        addNewGame() {
            let heute = new Date();
            this.games.push(
                    { 
                    id: this.games.length +1,
                    active: true, 
                    date: heute.toLocaleDateString("de-DE"), 
                    rounds: 0,
                    gamePoints: [],
                    players: []
                }
            )
            this.changeHomeList(true, this.games.length -1)   
        },
        openNewPlayerCard(to) {
            console.log(to)
            this.newPlayerActive = to;
            this.pupUp = 'NewPlayerPopUp';
        },
        addNewPlayer(newName) {  
            this.games[this.activeGameIndex].players.push(
                    { 
                    id: this.games[this.activeGameIndex].players.length +1, 
                    name: newName, 
                    points: []
                }
            )
            this.updateddate()
            this.closePopUp() 
        },
        changePlayerOpen(index){
            this.changePlayerActive = true; 
            console.log("index: " + index)
            this.activePlayerIndex = index;
            console.log("index P: " + this.activePlayerIndex)
            this.pupUp = 'ChangePlayerPopUp';
        },
        deleteGameOpen(){
            this.deleteGameActive = true;
            this.pupUp = 'DeleteGamePopUp';
        },
        deleteGame(index) {
            console.log("Index: " + index)
            console.log(this.games)
            this.games.splice(index, 1);
            this.closePopUp();
            this.newGameActiv = false;
        },
        removePlayer(index) {
            this.games[this.activeGameIndex].players.splice(index, 1);
            this.closePopUp();
        },
        closePopUp(){
            this.deleteGameActive = false;
            this.changePlayerActive = false;
            this.newPlayerActive = false;
            this.pupUp = "";
        },
        openAddDoublePopUp(){
            this.addDoubleActive = !this.addDoubleActive;
        },
        addDoubleRounds(rounds) {
            this.doubleRounds = rounds;
            this.updateddate();
            this.openAddDoublePopUp();
        },
        checkDoubelRounds(){
            if(this.doubleRounds > 0){
                this.doubleRounds--;
                this.doubleRoundsActive = true;
            }   else {
                this.doubleRoundsActive = false;
            }
        },
        updateddate() {
            let heute = new Date()
            this.games[this.activeGameIndex].date = heute.toLocaleDateString("de-DE")
        },
        addNumber(number) {
            this.currentGameValue += number;
            console.log(this.currentGameValue);
        },
        deleteLastNumber() {
            this.currentGameValue = this.currentGameValue.slice(0, -1);
            console.log(this.currentGameValue);
        },
        addnNewRound() {
            this.checkDoubelRounds();
            this.games[this.activeGameIndex].players.forEach(player => {
                this.games[this.activeGameIndex].players[player.id -1].points.push(
                    this.doubleRoundsActive? (Number(this.currentGameValue) * 2) : Number(this.currentGameValue));
                
                console.log("Index: " + (player.id -1));
                console.log("Array" + player);
            });
            this.games[this.activeGameIndex].rounds++;
            console.log("this.rounds:" + this.games[this.activeGameIndex].rounds);
            this.games[this.activeGameIndex].gamePoints.push(
                this.doubleRoundsActive? (Number(this.currentGameValue) * 2) : Number(this.currentGameValue));
            
            this.updateddate()
        },
    }   
}); 
