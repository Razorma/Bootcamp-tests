describe('Test My findItemsOver Function' , function(){
    var itemList1 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    
    var results1 = [
        {name : 'apples', qty : 40},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];

    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ]; 

    var results2 = [];

    it("The function should return products that have quantity higher than the threshold." , function(){
        assert.deepEqual(results1, findItemsOver(itemList1, 20));
    });
    it("The function an empty array if products that have quantity higher than the threshold are not found" , function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });
});