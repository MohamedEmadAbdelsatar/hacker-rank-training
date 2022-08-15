function equalStacks(h1, h2, h3) {
    if(h1.length == 0 || h2.length == 0 || h3.length == 0) {
        return 0;
    }

    let s1 = h1.reduce((a, b) => a+b, 0);
    let s2 = h2.reduce((a, b) => a+b, 0);
    let s3 = h3.reduce((a, b) => a+b, 0);

    while(s1 > 0 && s2 > 0 && s3 > 0) {
        console.log(s1);
        console.log(s2);
        console.log(s3);
        
        if(s1 == s2 && s2 == s3) {
            return s1;
        }
        
        let min = Math.min(s1, s2, s3);
        
        if(s1 > min) {
            s1 -= h1.shift();
        }
        
        if(s2 > min) {
            s2 -= h2.shift();
        }
        
        if(s3 > min) {
            s3 -= h3.shift();
        }
    }
    
    return 0;
}
