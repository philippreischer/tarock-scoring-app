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
        pupUp: "",
        addDoubleActive: false,
        deleteGamePopUpActive: false,
        

        currentGameValue:"",
        currentWin: 0,
        currentLose: 0,
        games:[/*
            { 
                id: 1,
                date: '01.04.2026', 
                rounds: 5,
                doubleRounds:0,
                maxDoubleRounds:0,
                doubleRoundsActive: false,
                dealerIndex: 0,
                dealer: "",
                gamePoints: [1,3,7,6,3],
                players: [
                    {id: 1, name: "Matthias", status: 'notPlayed', points: [-1,2,3,4,0]},
                    {id: 2, name: "Philipp", status: 'notPlayed', points: [-1,2,3,4,5]},
                    {id: 3, name: "Peter", status: 'notPlayed', points: [-1,2,3,4,-1]},
                    {id: 4, name: "Arthur", status: 'notPlayed', points: [3,-2,3,4,5]},
                    {id: 5, name: "Tom", status: 'notPlayed', points: [-1,2,3,4,-1]},
                    {id: 6, name: "Maria", status: 'notPlayed', points: [3,-2,3,4,5]},
                    {id: 7, name: "Arno", status: 'notPlayed', points: [3,-2,3,4,5]},
                ],
            },
            { 
                id: 2,
                date: '06.04.2026', 
                rounds: 8,
                doubleRounds:0,
                maxDoubleRounds:0,
                doubleRoundsActive: false,
                dealerIndex: 0,
                dealer: "",
                gamePoints: [1,3,7,6,3,4,6,6],
                players: [
                    {id: 1, name: "Matthias", status: 'notPlayed', points: [-1,2,3,4,0,2,1,0]},
                    {id: 2, name: "Philipp", status: 'notPlayed', points: [-1,2,3,4,5,2,1,3]},
                    {id: 3, name: "Peter", status: 'notPlayed', points: [-1,2,3,4,-1,2,1,6]},
                    {id: 4, name: "Arthur", status: 'notPlayed', points: [3,-2,3,4,5,2,1,4]},
                    {id: 5, name: "Maria", status: 'notPlayed', points: [3,-2,3,4,5,2,1,4]},
                ],
            },*/   
        ],
    }),
    persist: true,
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
                    date: heute.toLocaleDateString("de-DE"), 
                    rounds: 0,
                    doubleRounds:0,
                    maxDoubleRounds:0,
                    doubleRoundsActive: false,
                    dealerIndex: 0,
                    dealer: "",
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
            if(this.games[this.activeGameIndex].rounds === 0){
                this.games[this.activeGameIndex].dealer = 
                this.games[this.activeGameIndex].players[this.games[this.activeGameIndex].players.length -1].name;
            }
            if(this.games[this.activeGameIndex].rounds !== 0){
                for (let i = 0; i < this.games[this.activeGameIndex].rounds; i++){
                    this.games[this.activeGameIndex].players[this.games[this.activeGameIndex].players.length -1].points.push(0); 
                }
            }
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
            this.games[this.activeGameIndex].doubleRounds += Number(rounds);
            this.games[this.activeGameIndex].maxDoubleRounds = this.games[this.activeGameIndex].doubleRounds;
            this.updateddate();
            this.openAddDoublePopUp();
        },
        updateDoubleRounds(rounds) {
            this.games[this.activeGameIndex].doubleRounds = Number(rounds);
            this.games[this.activeGameIndex].maxDoubleRounds = this.games[this.activeGameIndex].doubleRounds;
            this.updateddate();
            this.openAddDoublePopUp();
        },
        checkDoubelRounds(){
            if(this.games[this.activeGameIndex].doubleRounds > 0){
                this.games[this.activeGameIndex].doubleRounds--;
                this.games[this.activeGameIndex].doubleRoundsActive = true;
            }   else {
                this.games[this.activeGameIndex].doubleRoundsActive = false;
            }
        },
        openDeleteEntryPopUp(){
            this.deleteGamePopUpActive = !this.deleteGamePopUpActive;
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
        addNewRound() {
            this.checkDoubelRounds();
            console.log("this.activeGameIndex: " + this.activeGameIndex);
            this.games[this.activeGameIndex].players.forEach((player, index) => {
                this.calculateGameValue(player, index);
                console.log("Index: " + (index));
                console.log("Array" + player);
            });
            this.games[this.activeGameIndex].rounds++;
            console.log("this.rounds:" + this.games[this.activeGameIndex].rounds);
            this.games[this.activeGameIndex].gamePoints.push(
                this.games[this.activeGameIndex].doubleRoundsActive? 
                (Number(this.currentGameValue) * 2) : Number(this.currentGameValue)
            );
            this.setDealer();
            this.updateddate();
            this.currentGameValue = "";
            this.resetAllPlayers();

        },
        calculateGameValue(player, index) {
            if (player.status === "win" && this.currentWin === 1 && this.currentLose === 3){
                this.pushPlayerValue(player , index, 3);
            } else if (player.status === "lose" && this.currentWin === 3 && this.currentLose === 1){
                this.pushPlayerValue(player , index, -3);
            } else if (player.status === "win" && this.currentWin === 3 && this.currentLose === 1){
                this.pushPlayerValue(player , index, 1);
            } else if (player.status === "lose" && this.currentWin === 1 && this.currentLose === 3){
                this.pushPlayerValue(player , index, -1);
            } else if (player.status === "win" && this.currentWin === 1 && this.currentLose === 2){
                this.pushPlayerValue(player , index, 2);
            } else if (player.status === "lose" && this.currentWin === 2 && this.currentLose === 1){
                this.pushPlayerValue(player , index, -2);
            } else if (player.status === "win" && this.currentWin === 2 && this.currentLose === 1){
                this.pushPlayerValue(player , index, 1);
            } else if (player.status === "lose" && this.currentWin === 1 && this.currentLose === 2){
                this.pushPlayerValue(player , index, -1);
            } else if (player.status === "win" && this.currentWin === 2 && this.currentLose === 2){
                this.pushPlayerValue(player , index, 1);
            } else if (player.status === "lose" && this.currentWin === 2 && this.currentLose === 2){
                this.pushPlayerValue(player , index, -1);
            } else if (player.status === "win" && this.currentWin === 1 && this.currentLose === 1){
                this.pushPlayerValue(player , index, 1);
            } else if (player.status === "lose" && this.currentWin === 1 && this.currentLose === 1){
                this.pushPlayerValue(player , index, -1);
            }   else {
                this.pushPlayerValue(player, index, 0);   
            }
            
        }, 
        pushPlayerValue(player, index, multiplier){
            if (this.games[this.activeGameIndex].rounds === 0){
                this.games[this.activeGameIndex].players[index].points.push( 
                    (Number(this.currentGameValue)) * Number(multiplier)
                    
                );
            } else {
                this.games[this.activeGameIndex].players[index].points.push(
                    this.games[this.activeGameIndex].doubleRoundsActive? 
                    (Number(player.points[player.points.length -1]) + (Number(this.currentGameValue) * Number(multiplier) * 2)) : 
                    (Number(player.points[player.points.length -1]) + (Number(this.currentGameValue)) * Number(multiplier))
                
                );
            }
        },
        deleteLastEntry(){
            this.games[this.activeGameIndex].gamePoints.pop();
            this.games[this.activeGameIndex].players.forEach((player, index) => {
                this.games[this.activeGameIndex].players[index].points.pop();
                console.log("id " + this.games[this.activeGameIndex].players[player.id -1])
            });
            if(this.games[this.activeGameIndex].dealerIndex > 1) {
                this.games[this.activeGameIndex].dealerIndex = this.games[this.activeGameIndex].dealerIndex -2;
            } else {
                this.games[this.activeGameIndex].dealerIndex = this.games[this.activeGameIndex].players.length -1;    
            }
            this.setDealer();
            if(this.games[this.activeGameIndex].doubleRounds > 0 && 
                this.games[this.activeGameIndex].doubleRounds < this.games[this.activeGameIndex].maxDoubleRounds) {
                this.games[this.activeGameIndex].doubleRounds = this.games[this.activeGameIndex].doubleRounds +1;
            } 
            this.games[this.activeGameIndex].rounds--;
            this.openDeleteEntryPopUp();
            this.updateddate();

        },
        setDealer(){
            if(this.games[this.activeGameIndex].dealerIndex < this.games[this.activeGameIndex].players.length){
                this.games[this.activeGameIndex].dealer = this.games[this.activeGameIndex].players[this.games[this.activeGameIndex].dealerIndex].name;
                this.games[this.activeGameIndex].dealerIndex++;
                console.log("this.dealer " + this.games[this.activeGameIndex].dealer)
            } else {
                this.games[this.activeGameIndex].dealerIndex = 0;
                this.games[this.activeGameIndex].dealer = this.games[this.activeGameIndex].players[this.games[this.activeGameIndex].dealerIndex].name;
                this.games[this.activeGameIndex].dealerIndex++;
                console.log("this.dealer " + this.games[this.activeGameIndex].dealer)
            }   
        },
        resetAllPlayers(){
            if(this.games.length === 0){
                return
            }
            this.games[this.activeGameIndex].players.forEach(player => {
                player.statusColor = 'color-gray';
                player.statusText = 'Nicht gespielt';
                player.status = 'notPlayed';
                this.currentWin = 0;
                this.currentLose = 0;
                
            })

        }
        
    }   
});

