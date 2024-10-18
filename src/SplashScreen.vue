<template>
  <v-overlay :model-value="showSplashScreen" absolute opacity="0.6" :style="props.cssVars" id="splash-overlay">
    <focus-trap>
      <div id="splash-screen" v-click-outside="closeSplashScreen" :style="props.cssVars">
        <font-awesome-icon
          id="close-splash-button" 
          class="tab-focusable"
          icon="xmark"
          @click="closeSplashScreen" 
          @keyup.enter="closeSplashScreen"
          tabindex="0" 
        />
        <div id="splash-screen-text">
          <div class="highlight">Blaze Star Nova</div>
          <div class="burst">Learn where in the sky to watch for a "new" star!</div>
        </div>
        <div id="splash-screen-acknowledgements" class="splash-screen-small">
          <div id="links">
            This Data Story is brought to you by <a href="https://www.cosmicds.cfa.harvard.edu/" target="_blank" rel="noopener noreferrer" class="no-wrap">Cosmic Data Stories</a> and <a href="https://www.worldwidetelescope.org/home/" target="_blank" rel="noopener noreferrer" class="no-wrap">WorldWide Telescope</a>.
          </div>
          <div id="splash-screen-logos">
            <credit-logos logo-size="4vmax" />
          </div>
          <div id="image-credit">
            Image credit: NASA / Goddard Space Flight Center
          </div>
        </div>
      </div>
    </focus-trap>
  </v-overlay>
</template>

<script setup lang="ts">
export interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cssVars?: any;
}

const props = withDefaults(defineProps<Props>(),{
  cssVars: () => ({})
});

const emits = defineEmits(['close']);

const showSplashScreen = defineModel({default: true});


function closeSplashScreen() {
  showSplashScreen.value = false;
  emits('close');
}


</script>


<style lang="less">


#splash-overlay {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#splash-screen {
  color: black;
  background-color: #000000;
  background-image: url('https://www.nasa.gov/wp-content/uploads/2024/06/novacyg093500952-print.jpg');
  background-position: 80% bottom;
  position: relative;

  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;

  font-family: 'Highway Gothic Narrow', 'Roboto', sans-serif;
  font-size: min(9vw, 6vh);

  border-radius: 30px;
  border: min(1.2vw, 0.9vh) solid var(--accent-color);
  overflow: auto;
  padding-top: 4rem;
  padding-bottom: 2rem;

  @media (max-width: 699px) {
    max-height: 80vh;
    max-width: 90vw;
  }

  @media (min-width: 700px) {
    max-height: 85vh;
    max-width: min(65vw, 800px);
  }

  div:not(#close-splash-button, #splash-screen-acknowledgements) {
    margin-inline: 5%;
    text-align: center;
  }
  
  .highlight {
    color: var(--accent-color);
    text-transform: uppercase;
    font-weight: bolder;
    text-shadow: 0 0 16px black;
    filter: drop-shadow(0 0 5px black);
    font-size: min(1.2em, 7vw);

    @media (max-width: 750px) {
      font-weight: bold;
    }
  }

  .burst {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 15px;
    margin: 1rem;
    padding: 1rem;
    line-height: 1.2;
    font-size: min(0.9em, 5vw)
  }

  .splash-screen-small {
    font-size: var(--default-font-size);
    font-weight: bold;
    margin-top: 1rem;
  }
  
  #splash-screen-acknowledgements {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 1rem;
    margin-bottom: 2rem;

    #links {
      font-size: min(0.8em, 4vw)
    }
  }

  #splash-screen-logos {
    margin-top: 1.5rem;
  }

  #close-splash-button {
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: end;
    color: var(--accent-color);
    font-size: min(5vw, 4vh);

    &:hover {
      cursor: pointer;
    }
  }

  a {
    color: var(--accent-color);
    text-decoration: none;

    &:hover {
      color: #F8C86C;
    }
  }

  #image-credit {
    position: absolute;
    bottom: 0.5rem;
    right: -1rem;
    font-size: calc(0.6 * var(--default-font-size));
    font-weight: 400;
    color: #DDDDDD;
  }

  .no-wrap {
    white-space: nowrap;
  }
}


</style>
