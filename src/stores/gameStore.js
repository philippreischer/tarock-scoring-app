import { defineStore } from 'pinia';

export const useGameStore = defineStore(`games`, {
    state: () => ({
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
                ],
            },
            { 
                id: 2,
                active: true, 
                date: '01.04.2026', 
                rounds: 5,
                gamePoints: [1,3,7,6,3],
                players: [
                    {id: 1, name: "Matthias", points: [-1,2,3,4,0]},
                    {id: 2, name: "Philipp", points: [-1,2,3,4,5]},
                    {id: 3, name: "Peter", points: [-1,2,3,4,-1]},
                    {id: 4, name: "Arthur", points: [3,-2,3,4,5]},
                ],
            },   
        ]
    })
}); 
