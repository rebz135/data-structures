describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should work on 5,000 values', function() {
    for (let i = 0; i < 5001; i++) {
      set.add(i);
    }
    for (let i = 0; i < 5001; i++) {
      expect(set.contains(i)).to.equal(true);
    }
  });
  
  it('should work with any object input value', function() {
    let obj = {a:1};
    let arr = [1,2,3];
    let num = 1;
    set.add(obj);
    set.add(arr);
    set.add(num);
    set.add(null);
    
    expect(set.contains(obj)).to.equal(true);
    expect(set.contains(arr)).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(null)).to.equal(true);

  });
});
