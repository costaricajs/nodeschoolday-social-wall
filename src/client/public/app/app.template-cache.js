angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/features/social/templates/wall.template.html","\n<div layout=\"column\">\n  <div id=\"socialfeeds\" layout-gt-sm=\"row\">\n    <md-content flex=\"\" layout=\"column\" layout-align=\"center\" style=\"height: 69vh\">\n      <md-content class=\"tweets-wall\" layout=\"column\" flex=\"\" layout-wrap=\"\" layout-padding=\"\" layout-margin=\"\" style=\"display: block\">\n        <md-card ng-repeat=\"tweet in wallController.tweets | limitTo: 50\">\n          <div class=\"media\"><img class=\"media-figure\" ng-src=\"{{tweet.user.profile_image_url}}\"/>\n            <p class=\"media-body\">{{tweet.text}}</p>\n          </div>\n          <!--md-card-header-->\n        </md-card>\n      </md-content>\n    </md-content>\n    <div class=\"gallery-wall\" flex=\"50\"></div>\n  </div>\n  <div class=\"bg-yellow\" id=\"participantes\" layout=\"column\" layout-align=\"center center\">\n    <h1>Participantes</h1>\n    <md-content layout=\"row\" layout-wrap=\"\" layout-align=\"center center\">\n      <div ng-repeat=\"(key, prop) in mainController.participants\">\n        <div ng-switch=\"\" on=\"mainController.participants[key].github ? \'github\' : \'twitter\' \"><a ng-switch-when=\"twitter\" target=\"_blank\" ng-href=\"http://twitter.com/{{mainController.participants[key].twitter}}\"><img ng-src=\"https://twitter.com/{{mainController.participants[key].twitter}}/profile_image?size=original\" height=\"120px\" width=\"120px\" alt=\"\"/></a><a ng-switch-when=\"github\" target=\"_blank\" ng-href=\"http://github.com/{{mainController.participants[key].github}}\"><img ng-src=\"https://avatars.githubusercontent.com/{{mainController.participants[key].github}}?s=120\" height=\"120px\" width=\"120px\" alt=\"\"/></a></div>\n      </div>\n    </md-content>\n  </div>\n  <div id=\"patrocinadores\" layout=\"column\" layout-align=\"center center\">\n    <p>No podríamos tener eventos Nodeschool aquí en Costa Rica sin la ayuda de estupendos patrocinadores:</p>\n    <div class=\"row\">\n      <div class=\"col-md-12 centered\">\n        <h2>Patrocinadores Platinum</h2><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/gorilla-logic.png\"/><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/edify.png\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"col-md-6 centered\">\n          <h2>Patrocinadores Oro</h2><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/gap.png\"/><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/avantica.png\"/>\n        </div>\n        <div class=\"col-md-6 centered\">\n          <h2>Patrocinadores Plata</h2><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/outer-space-coders.png\"/><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/la404.png\"/><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/18techs.png\"/><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/salsamobi.png\"/><img class=\"img img-sponsors\" src=\"http://nodeschool.io/costarica/images/sponsors/brainstation.png\"/>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bg-yellow\">\n    <div class=\"container\">\n      <section class=\"row white questions\">\n        <div class=\"col-md-12\"><br/>\n          <h3>Nodeschool Costa Rica</h3>\n          <p>Nodeschool Costa Rica es parte del esfuerzo global para enseñar voluntariamente Node.js y JavaScript a todos a través de talleres presenciales utilizando módulos interactivos que te ayudan a aprender o mejorar, escribiendo código y resolviendo problemas con la ayuda de mentores.</p>\n          <p>Más información en&nbsp;<a target=\"_blank\" href=\"http://nodeschool.io/costarica\">nodeschool.io/costarica</a></p>\n          <script async=\"\" defer=\"\" src=\"http://slack.costaricajs.co/slackin.js?large\"></script>\n        </div>\n        <p class=\"copy\" style=\"font-size:10px; text-align:right; margin:0; padding-right:40px; padding-bottom:10px\">sitio web desarrollado por&nbsp;<a target=\"_blank\" href=\"http://www.rubenabix.com\" alt=\"Rubén Abarca: Javascript Developer\">Rubén Abarca</a>&nbsp;y&nbsp;<a target=\"_blank\" href=\"http://gaboesquivel.com\" alt=\"Gabo Esquivel: Javascript Developer\">Gabo Esquivel</a>. © 2016 CostaRicaJS</p>\n      </section>\n    </div>\n    <!-- div(flex=\"5\")\n    //br\n    //h4\n    //  //b key {{key}} value {{value.name}}\n    //  b {{mainController.participants[key].name}}\n    //p(layout=\"row\", layout-align=\"center center\")\n    //  a(ng-if=\"mainController.participants[key].website\", target=\'_blank\', ng-href=\'{{mainController.participants[key].website}}\')\n    //    ng-md-icon(icon=\"create\", size=\"24\", style=\"fill: #337ab7\")\n    //  a(ng-if=\"mainController.participants[key].twitter\", target=\'_blank\', ng-href=\'http://twitter.com/{{mainController.participants[key].twitter}}\')\n    //    ng-md-icon(icon=\"twitter\", size=\"24\", style=\"fill: #337ab7\")\n    //  a(ng-if=\"mainController.participants[key].github\", target=\'_blank\', ng-href=\'http://github.com/{{mainController.participants[key].github}}\')\n    //    ng-md-icon(icon=\"github-circle\", size=\"24\", style=\"fill: #337ab7\")\n    //br\n    //br\n    -->\n  </div>\n</div>");}]);