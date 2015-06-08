describe('bar', function() {

  var entradas = [];

  beforeEach(function(){
    browser.get('http://localhost:8000/#/bar/1');
    entradas = element.all(by.repeater('entrada in entradas'));
  });

  it('debería mostrar la lista de cosos', function() {
    expect(entradas.count()).toEqual(3);
  });

  it('debería poder agregar elementos', function() {
    var nuevaEntrada = "Una nueva Entrada";
    element(by.model('nuevaEntrada')).sendKeys(nuevaEntrada);
    element(by.buttonText('Agregar')).click();

    entradas = element.all(by.repeater('entrada in entradas'));
    expect(entradas.count()).toEqual(4);
    expect(entradas.get(3).getText()).toEqual(nuevaEntrada);
    expect(element(by.model('nuevaEntrada')).getText()).toEqual("");
  });
});