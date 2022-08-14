function processData(input) {
    let lines = input.split("\n");
    const n = lines[0];
    let s = '';
    let steps = [];
    
    for (let i = 1; i <= n; i++) {
        let args = lines[i].split(' ');
        switch (args[0]) {
            case '1':
                steps.push(s);
                s += args[1];
                break;
            case '2':
                steps.push(s);
                s = s.substring(0, s.length - parseInt(args[1]));
                break;
            case '3':
                console.log(s.charAt(parseInt(args[1]) - 1));
                break;
            case '4':
                s = steps.pop();
                break;
        }
    }
} 
