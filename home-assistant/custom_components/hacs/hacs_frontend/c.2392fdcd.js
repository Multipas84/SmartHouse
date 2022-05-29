import{_ as e,n as t,a as i,H as a,e as s,b as r,m as o,$ as l,o as c,c as n,s as d,d as h,r as u}from"./main-150a7578.js";import"./c.58ca2f44.js";import{s as p,S as f,a as m}from"./c.cd17e526.js";import"./c.c3e3842d.js";import"./c.2222fc71.js";import"./c.e82f2001.js";import{f as v}from"./c.7b4b1400.js";import{b as g}from"./c.be11274c.js";import"./c.7a3e1808.js";import"./c.8e28b461.js";import"./c.ce7c7300.js";import"./c.322197f2.js";let y=class extends f{};y.styles=[p],y=e([t("mwc-select")],y);const _=["stars","last_updated","name"];let k=i([t("hacs-add-repository-dialog")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"filters",value:()=>[]},{kind:"field",decorators:[s({type:Number})],key:"_load",value:()=>30},{kind:"field",decorators:[s({type:Number})],key:"_top",value:()=>0},{kind:"field",decorators:[s()],key:"_searchInput",value:()=>""},{kind:"field",decorators:[s()],key:"_sortBy",value:()=>_[0]},{kind:"field",decorators:[s()],key:"section",value:void 0},{kind:"method",key:"shouldUpdate",value:function(e){return e.forEach(((e,t)=>{"hass"===t&&(this.sidebarDocked='"docked"'===window.localStorage.getItem("dockedSidebar"))})),e.has("narrow")||e.has("filters")||e.has("active")||e.has("_searchInput")||e.has("_load")||e.has("_sortBy")}},{kind:"field",key:"_repositoriesInActiveCategory",value(){return(e,t)=>null==e?void 0:e.filter((e=>{var i,a;return!e.installed&&(null===(i=this.hacs.sections)||void 0===i||null===(a=i.find((e=>e.id===this.section)).categories)||void 0===a?void 0:a.includes(e.category))&&!e.installed&&(null==t?void 0:t.includes(e.category))}))}},{kind:"method",key:"firstUpdated",value:async function(){var e;if(this.addEventListener("filter-change",(e=>this._updateFilters(e))),0===(null===(e=this.filters)||void 0===e?void 0:e.length)){var t;const e=null===(t=r(this.hacs.language,this.route))||void 0===t?void 0:t.categories;null==e||e.filter((e=>{var t;return null===(t=this.hacs.configuration)||void 0===t?void 0:t.categories.includes(e)})).forEach((e=>{this.filters.push({id:e,value:e,checked:!0})})),this.requestUpdate("filters")}}},{kind:"method",key:"_updateFilters",value:function(e){const t=this.filters.find((t=>t.id===e.detail.id));this.filters.find((e=>e.id===t.id)).checked=!t.checked,this.requestUpdate("filters")}},{kind:"field",key:"_filterRepositories",value:()=>o(v)},{kind:"method",key:"render",value:function(){var e;if(!this.active)return l``;this._searchInput=window.localStorage.getItem("hacs-search")||"";let t=this._filterRepositories(this._repositoriesInActiveCategory(this.repositories,null===(e=this.hacs.configuration)||void 0===e?void 0:e.categories),this._searchInput);return 0!==this.filters.length&&(t=t.filter((e=>{var t;return null===(t=this.filters.find((t=>t.id===e.category)))||void 0===t?void 0:t.checked}))),l`
      <hacs-dialog
        .active=${this.active}
        .hass=${this.hass}
        .title=${this.hacs.localize("dialog_add_repo.title")}
        hideActions
        scrimClickAction
        maxWidth
      >
        <div class="searchandfilter" ?narrow=${this.narrow}>
          <search-input
            .hass=${this.hass}
            .label=${this.hacs.localize("search.placeholder")}
            .filter=${this._searchInput}
            @value-changed=${this._inputValueChanged}
            ?narrow=${this.narrow}
          ></search-input>
          <mwc-select
            ?narrow=${this.narrow}
            .label=${this.hacs.localize("dialog_add_repo.sort_by")}
            .value=${this._sortBy}
            @selected=${e=>this._sortBy=e.currentTarget.value}
            @closed=${m}
          >
            ${_.map((e=>l`<mwc-list-item .value=${e}>
                  ${this.hacs.localize(`dialog_add_repo.sort_by_values.${e}`)||e}
                </mwc-list-item>`))}
          </mwc-select>
        </div>
        ${this.filters.length>1?l`<div class="filters">
              <hacs-filter .hacs=${this.hacs} .filters="${this.filters}"></hacs-filter>
            </div>`:""}
        <div class=${c({content:!0,narrow:this.narrow})} @scroll=${this._loadMore}>
          <mwc-list>
            ${0===t.length?l`<ha-alert>${this.hacs.localize("dialog_add_repo.no_match")}</ha-alert>`:t.sort(((e,t)=>"name"===this._sortBy?e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:1:e[this._sortBy]>t[this._sortBy]?-1:1)).slice(0,this._load).map((e=>l`<ha-clickable-list-item
                      graphic=${this.narrow?"":"avatar"}
                      twoline
                      @click=${()=>this._openInformation(e)}
                      disableHref
                      .hasMeta=${!this.narrow&&"integration"!==e.category}
                    >
                      ${this.narrow?"":"integration"===e.category?l`
                            <img
                              loading="lazy"
                              .src=${g({domain:e.domain,darkOptimized:this.hass.themes.darkMode,type:"icon"})}
                              referrerpolicy="no-referrer"
                              @error=${this._onImageError}
                              @load=${this._onImageLoad}
                              slot="graphic"
                            />
                          `:l`
                            <ha-svg-icon
                              slot="graphic"
                              path="${n}"
                              style="padding-left: 0; height: 40px; width: 40px;"
                            >
                            </ha-svg-icon>
                          `}
                      <span>${e.name}</span>
                      <span slot="secondary">${e.description}</span>
                      <ha-chip slot="meta"
                        >${this.hacs.localize(`common.${e.category}`)}</ha-chip
                      >
                    </ha-clickable-list-item>`))}
          </mwc-list>
        </div>
      </hacs-dialog>
    `}},{kind:"method",key:"_loadMore",value:function(e){const t=e.target.scrollTop;t>=this._top?this._load+=1:this._load-=1,this._top=t}},{kind:"method",key:"_inputValueChanged",value:function(e){this._searchInput=e.detail.value,window.localStorage.setItem("hacs-search",this._searchInput)}},{kind:"method",key:"_openInformation",value:function(e){this.dispatchEvent(new CustomEvent("hacs-dialog-secondary",{detail:{type:"repository-info",repository:e.id},bubbles:!0,composed:!0}))}},{kind:"method",key:"_onImageLoad",value:function(e){e.target.style.visibility="initial"}},{kind:"method",key:"_onImageError",value:function(e){var t;if(null!==(t=e.target)&&void 0!==t&&t.outerHTML)try{e.target.outerHTML=`<ha-svg-icon path="${n}" slot="graphic"></ha-svg-icon>`}catch(e){}}},{kind:"get",static:!0,key:"styles",value:function(){return[d,h,u`
        .content {
          width: 100%;
          overflow: auto;
          max-height: 70vh;
        }

        .filter {
          margin-top: -12px;
          display: flex;
          width: 200px;
          float: right;
        }

        .list {
          margin-top: 16px;
          width: 1024px;
          max-width: 100%;
        }
        search-input {
          display: block;
          float: left;
          width: 75%;
        }
        search-input[narrow],
        mwc-select[narrow] {
          width: 100%;
          margin: 4px 0;
        }

        .filters {
          width: 100%;
          display: flex;
        }

        hacs-filter {
          width: 100%;
          margin-left: -32px;
        }

        .searchandfilter {
          display: flex;
          justify-content: space-between;
          align-items: self-end;
        }

        .searchandfilter[narrow] {
          flex-direction: column;
        }
      `]}}]}}),a);export{k as HacsAddRepositoryDialog};
