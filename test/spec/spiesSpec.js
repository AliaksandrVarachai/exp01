describe("Person", function() {

    var foo, bar, fetchedBar;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };
        //позволяет запоминать, что функция была уже вызвана для всего describe
        /*spyOn(foo, "getBar").and.callFake(function() {
            return 123;
        });*/
        spyOn(foo, "getBar").and.callThrough();
        spyOn(foo, "setBar").and.callThrough();
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("track that the spy was called", function() {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function() {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function() {
        foo.setBar.and.stub();
        bar = -99;
        expect(fetchedBar).toEqual(123);

    });



    xit("to pend something", function() {
        expect(true).toBe(true);
    });
    it("calls the sayHello() function", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "helloSomeone");
        fakePerson.helloSomeone("world");
        expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
    });

    runs(function() {
        var z = 1;
        expect(z).toEqual(1);
    });

    runs(function() {
        var b = 2;
        b++;
        expect(b).toEqual(3);
    });


});
