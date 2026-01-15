(function(){
  // Set the "last updated" stamp (current date) on pages that include #updated
  const el = document.getElementById('updated');
  if(el){
    const d = new Date();
    el.textContent = d.toLocaleString(undefined, { year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'2-digit' });
  }

  // Simple "demo" calculator on the App Info page
  const servings = document.getElementById('servings');
  const meals = document.getElementById('meals');
  const itemsOut = document.getElementById('itemsOut');
  function update(){
    if(!servings || !meals || !itemsOut) return;
    const s = Math.max(1, parseInt(servings.value || '1', 10));
    const m = Math.max(1, parseInt(meals.value || '1', 10));
    // rough estimate: 6 ingredients per meal + 2 staples per person/week
    const items = (m * 6) + (s * 2);
    itemsOut.textContent = items.toString();
  }
  if(servings && meals && itemsOut){
    servings.addEventListener('input', update);
    meals.addEventListener('input', update);
    update();
  }
})();