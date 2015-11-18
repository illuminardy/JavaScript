describe( "Game Of Life", function () {

  var gameOfLife = GameOfLife;

  beforeEach(function(){
      spyOn(gameOfLife, 'init');
  });

  afterEach(function() {
      
  });

  it("should be able to initialize a game", function () {
      expect(gameOfLife.init).toBeDefined();
      gameOfLife.init();
      expect(gameOfLife.init).toHaveBeenCalled();
  });

  it("returns number of neighbors alive", function () {
    gameOfLife.init();
    expect(gameOfLife.aliveNeighbors(1, 1)).toEqual(5);
  });

  it("sets the next stage based on current state", function () {
    gameOfLife.init();
    gameOfLife.nextStage();
    expect(gameOfLife.aliveNeighbors(1, 1)).toEqual(4);
  });
});