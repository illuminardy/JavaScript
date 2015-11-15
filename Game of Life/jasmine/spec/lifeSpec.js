describe( "Game Of Life", function () {

  var gameOfLife = GameOfLife;

  beforeEach(function(){
      spyOn(gameOfLife, 'init');
  });

  afterEach(function() {
      //myfunc.reset();
  });

  it("should be able to initialize a game", function () {
      expect(gameOfLife.init).toBeDefined();
      gameOfLife.init();
      expect(gameOfLife.init).toHaveBeenCalled();
  });

  it("returns number of neighbors alive", function () {
    gameOfLife.init();
    expect(gameOfLife.aliveNeighbors(0, 0)).toEqual(1);
    expect(gameOfLife.aliveNeighbors(1, 1)).toEqual(5);
    expect(gameOfLife.aliveNeighbors(2, 2)).toEqual(2);
  });

  it("sets the next stage based on current state", function () {
    gameOfLife.init();
    gameOfLife.nextStage();
    expect(gameOfLife.aliveNeighbors(0, 0)).toEqual(1);
    expect(gameOfLife.aliveNeighbors(1, 1)).toEqual(4);
    expect(gameOfLife.aliveNeighbors(2, 2)).toEqual(2);
  });
});