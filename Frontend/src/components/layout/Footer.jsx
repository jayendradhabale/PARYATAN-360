function Footer() {
  return ( 
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <script>
  window.watsonAssistantChatOptions = {
    integrationID: "2a39298c-37db-41be-b16b-c1de5ac952d5", // The ID of this integration.
    region: "https://integrations.au-syd.assistant.watson.appdomain.cloud", // The region your integration is hosted in.
    serviceInstanceID: "14c9eb24-f4d2-48f4-9027-10c83ba809d5", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>
          <p className="font-extrabold">PARYATAN <span className="text-ocean">360</span></p>
          <p className="mt-1 text-ink/60">From tourist planning to tourism optimisation.</p>
        </div>
        <p className="text-ink/55">Built for Smart India Hackathon · Travel & Tourism</p>
      </div>
    </footer>
  );
}

export default Footer;
