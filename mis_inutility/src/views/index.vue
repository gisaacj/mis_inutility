<template>
<div>
<pano title="" width="720" height="580" debug bundle="static/pantry/" format="jpg"></pano>
<div id="fontdiv" class="fontdiv"></div>
    <div class="pushtext">  
        <textarea id="message" maxlength="15" ></textarea>  
        <div onclick="pushtext()" class="pushbtn">发送</div>  
    </div>  
</div>
    <!-- built files will be auto injected -->
    
</template>
<script type="text/ecmascript-6">
import Pano from "vue-pano";
export default {
  components: { Pano }
};
</script>

