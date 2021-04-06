function nbYear(p0, percent, aug, p) {
   
      var tahun = [];
 
    var percent = percent / 100;
      
    for(var p0; p0 < p; p0+=p0*percent+aug) {
          itungan = p0 + p0 * percent + aug;
          tahun.push(itungan);
      }
      return tahun.length;
}

console.log(nbYear(1000, 0.02, 50, 1200 ))