(function(){
  // Fallback bootstrap for missing SPA bundle. This will render projects.json into #root
  async function fetchProjects(){
    try{
      const res = await fetch('./projects.json', {cache:'no-cache'});
      if(!res.ok) throw new Error('HTTP '+res.status);
      const data = await res.json();
      return data;
    }catch(e){
      console.error('Failed to load projects.json', e);
      return null;
    }
  }

  function numberize(v){ return (typeof v==='number')? v.toLocaleString() : (v||'0'); }
  function escapeHtml(str){ return String(str||'').replace(/[&<>\