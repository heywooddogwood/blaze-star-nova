<template>
  <v-dialog :style="cssVars" class="bottom-sheet" id="text-bottom-sheet" hide-overlay persistent no-click-animation
  absolute width="100%" :scrim="false" location="bottom" v-model="showUseSheet"
  transition="dialog-bottom-transition">
    <v-card id="bottom-sheet-card" height="100%">
      <font-awesome-icon id="close-text-icon" class="control-icon" icon="times" size="lg"
        @click="showUseSheet = false" @keyup.enter="showUseSheet = false" tabindex="0">
      </font-awesome-icon>
      <v-card-text class="info-text tab-items no-bottom-border-radius scrollable">
        <h3>How to Use WWT</h3>
        <v-container>
          <v-row align="center">
            <v-col cols="4">
              <v-chip label outlined>
                Pan
              </v-chip>
            </v-col>
            <v-col cols="8" class="pt-1">
              <strong>{{ touchscreen ? "press + drag" : "click + drag" }}</strong> {{ touchscreen ? ":" : "or"
              }} <strong>{{ touchscreen ? ":" : "W-A-S-D" }}</strong> {{ touchscreen ? ":" : "keys" }}<br>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="4">
              <v-chip label outlined>
                Zoom
              </v-chip>
            </v-col>
            <v-col cols="8" class="pt-1">
              <strong>{{ touchscreen ? "pinch in and out" : "scroll in and out" }}</strong> {{ touchscreen ? ":"
                : "or" }} <strong>{{ touchscreen ? ":" : "I-O" }}</strong> {{ touchscreen ? ":" : "keys" }}<br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="credits">
                <h3>Credits:</h3>
                <h4><a href="https://www.cosmicds.cfa.harvard.edu/" target="_blank"
                    rel="noopener noreferrer">CosmicDS</a> Vue Data Stories Team:</h4>
                John Lewis<br>
                Jon Carifio<br>
                Pat Udomprasert<br>
                Alyssa Goodman<br>
                Mary Dussault<br>
                Harry Houghton<br>
                Anna Nolin<br>
                Evaluator: Sue Sunbury<br>
                <br>
                <h4>WorldWide Telescope Team:</h4>
                Peter Williams<br>
                A. David Weigel<br>
                Jon Carifio<br>
              </div>
              <v-spacer class="end-spacer"></v-spacer>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <funding-acknowledgement />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, defineModel, watch } from 'vue';

export interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cssVars?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  accentColor?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  touchscreen?: any;
  showBlazeOverlay: boolean;
  showAlphaOverlay: boolean;
}

const props = withDefaults(defineProps<Props>(),{
  cssVars: () => ({}),
  accentColor: () => 'accent',
  touchscreen: () => false,
  showBlazeOverlay: false,
  showalphaOverlay: false,
});

const emits = defineEmits(['close', 'toggle-blaze', 'toggle-alpha']);

const { cssVars, touchscreen } = props;

const showUseSheet = defineModel({default: true});

watch(() => showUseSheet, (newVal) => {
  if (!newVal) {
    emits('close');
  }
});

</script>

<style lang="less">

.bottom-sheet {
  .v-overlay__content {
    align-self: flex-end;
    padding: 0;
    margin: 0;
    max-width: 100%;
    height: 34%;
  }

  #tabs {
    width: calc(100% - 3em);
    align-self: left;
  }
  
  .info-tabs {
    border-bottom: 2px solid var(--accent-color);
  }

  .info-text {
    height: 33vh;
    padding-bottom: 25px;

    & a {
      text-decoration: none;
    }
  }

  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 15;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      color: white;
      border: 2px solid white;
    }
  }

  .scrollable {
    overflow-y: auto;
  }



  #bottom-sheet-card .tab-items.v-card-text {
    font-size: ~"max(14px, calc(0.7em + 0.3vw))";
    padding-top: ~"max(2vw, 16px)";
    padding-left: ~"max(4vw, 16px)";
    padding-right: ~"max(4vw, 16px)";

    .end-spacer {
      height: 25px;
    }
  }


  #close-text-icon {
    position: absolute;
    top: 0.25em;
    right: calc((3em - 0.6875em) / 3); // font-awesome-icons have width 0.6875em
    color: white;
  }

  // This prevents the tabs from having some extra space to the left when the screen is small
  // (around 400px or less)
  .v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next,
  .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev {
    display: none;
  }
}

figure {
  padding: 0.5em;
  margin: 1em;
  background-color: #151515;
}

.fig-right {
  float: right;
}

.fig-left {
  float: left;
}

figcaption {
  font-size: 0.8em;
  color: #ccc;
}

</style>
