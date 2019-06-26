module.combos = (fullArray, fullLen, pushBack, start, curLen) => {
    // pushBack stack
    if (pushBack.length === fullLen)
        this.allArray.push(pushBack.slice(0,fullLen));

    if (curLen < 0) return;
    for (let i=start; i<fullArray.length; i++) {
        pushBack.push(fullArray[i]);
        combos(fullArray, fullLen, pushBack, i+1, curLen-1);
        pushBack.pop();
    }
};
