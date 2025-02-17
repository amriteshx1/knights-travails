function knightMoves(start, end) {
    let moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    let queue = [start];
    let paths = [[start]]; 
    
    let index = 0;
    while (index < queue.length) {
        let current = queue[index];
        let path = paths[index];
        index++;

        if (current[0] === end[0] && current[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(pos));
            return path;
        }

        for (let move of moves) {
            let newX = current[0] + move[0];
            let newY = current[1] + move[1];

            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                let newPos = [newX, newY];

                let alreadyVisited = false;
                for (let pos of path) {
                    if (pos[0] === newPos[0] && pos[1] === newPos[1]) {
                        alreadyVisited = true;
                        break;
                    }
                }

                if (!alreadyVisited) {
                    queue.push(newPos);
                    paths.push([...path, newPos]);
                }
            }
        }
    }
}


