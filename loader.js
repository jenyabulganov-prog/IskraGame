(async()=>{
  const files=[
    "game.part0.txt","game.part1.txt","game.part2.txt",
    "game.tail0.txt","game.tail1.txt","game.tail2.txt","game.tail3.txt",
    "game.tail4.txt","game.tail5.txt","game.tail6.txt","game.tail7.txt"
  ];
  const parts=[];
  for(const file of files){
    const r=await fetch(file,{cache:"no-store"});
    if(!r.ok) throw new Error("Не удалось загрузить "+file);
    parts.push(await r.text());
  }
  (0,eval)(parts.join(""));
})().catch(err=>{
  console.error(err);
  document.body.innerHTML='<pre style="color:white;padding:20px">'+err.message+'</pre>';
});
