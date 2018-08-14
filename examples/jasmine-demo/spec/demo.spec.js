describe("MyTest", function() {
    beforeAll(function(){
       console.log('beforeAll level1');
    });
    beforeEach(function() {
        console.log("beforeEach level1");
    });
    describe("MyTest level2", function() {
        beforeAll(function(){
            console.log('beforeAll level2');
        });
        beforeEach(function() {
            console.log("beforeEach level2");
        });
        describe("MyTest level3", function() {
            beforeEach(function() {
                console.log("beforeEach level3");
            });
            it("is a simple spec in level3", function() {
                console.log("A simple spec in level3");
                expect(true).toBe(true);
            });
            afterEach(function() {
                console.log("afterEach level3");
            });
        });
        afterEach(function() {
            console.log("afterEach level2");
        });
        afterAll(function(){
            console.log('afterAll level2');
        });
    });
    describe('a test suit', ()=>{
        it('a test case', ()=>{
            console.log('a test case');
            expect(true).toBe(true);
        });
    });
    afterEach(function() {
        console.log("afterEach level1");
    });
    afterAll(function(){
        console.log('afterAll level1');
    });
});