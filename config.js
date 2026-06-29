var config = {
    style: 'mapbox://styles/heilandoo/cmo1a4fnn00ye01s98yq00bik',    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGVpbGFuZG9vIiwiYSI6ImNrYWM1eDA3aDE4dnIzMnM5Mm1hOHhrdzUifQ.oBXUToa-aVWySICZ5LeCVg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Stories of resistance along the H2Med pipeline',
    subtitle: 'Why communities are resisting, what they think of the future of energy, how they percieve the impacts.',
    byline: 'by kollektiv gazpacho',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'pipeline-intro',
            alignment: 'left',
            hidden: false,
            title: 'The planned hydrogen pipeline network',
            // image: './assets/arcelor-mittal-surf.JPG',
            description: 'Europe is planning a big network of pipelines to transport hydrogen and fossil gas. The majority of the hydrogen transported is supposed to come from northern Africa and rural areas in the south of Europe. "Green" hydrogen is widely considered as "sustainable" solution for infinite industrial economic growth without CO2 emissions and one-size-fits-it-all-solution for the climate crisis we are in. However, along the pipelines, communities question this story, suffering from the impacts on people and land. They are building their own futures in resistance to this mega energy infrastructure.',
            location: {
                center: [-3, 43.5],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PointResist',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'h2med-intro',
            alignment: 'right',
            hidden: false,
            title: 'The H2Med pipeline',
            // image: './assets/washington-dc.jpg',
            description: 'The planned H2Med pipeline is supposed to transport energy from the Iberian Peninsula to Western Germany. In the name of the "green" transition the pipeline should export large amounts of hydrogen over more than 2000km. But this mega-infrastructure cannot fulfill the promises that are made. What the situation looks like: <ol><li>Large-scale energy export is prioritised over local use tied to necessity.</li><li>Industrial hydrogen production increases conflicts over land, water, and renewable energy.</li><li>Hydrogen allows fossil industries to prolong fossil fuel use through blending.</li></ol>This map tells stories of people and collectives who resist. They debunk myths, sabotage pipelines, and build alternative futures. Scroll down and follow along!',
            location: {
                center: [-6, 40.57],
                zoom: 5.1,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'HuelvaXixon',
                     opacity: 1
                },
                {
                    layer: 'PointResist',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {

                }
            ]
        },
        {
            id: 'pipeline-xixon',
            alignment: 'left',
            hidden: false,
            title: 'Export over local use?',
            video: 'https://tube.xy-space.de/videos/embed/9miGr4SKwABhae1Q5FD9Ge?controls=1&title=1&peertubeLink=0',
            //image: './assets/IMG_3135.JPG',
            description: 'We met Paco in port of Xixón. Here, two pipelines of the network meet, a hydrogen storage is planned and an LNG-terminal for shipping gas exists. Paco from Ecoloxistes n’Aición d’Asturies criticises the oversized infrastructure for gas export here and all over the Iberian Peninsula. While locally produced hydrogen can be useful way to power heavy industries, the current development is pointing in the very opposite direction. This system does not rely on "hydrogen that is produced and used locally, close to where it is needed", it "mainly benefits major energy corporations, which are interested above all in expanding their own infrastructure networks", Paco says.',
            location: {
              center: [-5.6798, 43.57472],
              zoom: 12.52,
              pitch: 55,
              bearing: 160.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'transition-fail1',
            alignment: 'right',
            hidden: false,
            title: 'The transition we desire',
            video: 'https://tube.xy-space.de/videos/embed/89jspk61pPWQYwYqWLncVW?controls=1&title=0&peertubeLink=0',
            image: '',
            description: 'Cesar feels the current transition leaves behind rural communities in the peripheries and prioritises the industrial and urban centres and their ever increasing hunger for energy. We met the collective SOS Montes Torozos in La Mudarra, a village next to a large substation. Substations are key nodes in the energy system, shaping where energy and hydrogen infrastructure is built due to their grid connectivity. Built for fossil, hydro, and nuclear systems, they are now reused for hydrogen, reinforcing existing spatial inequalities and further marginalising rural areas.',
            location: {
                center: [-4.93758, 41.78880],
                zoom: 13.5,
                pitch: 52,
                bearing: 52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'LaMudarraLines',
                     opacity: 1
                },
            ],
            onChapterExit: [
                {
                     layer: 'LaMudarraLines',
                     opacity: 0
                },
            ]
        },
        {
            id: 'pipeline-impact',
            alignment: 'center',
            hidden: false,
            title: 'Energy export over food production',
            video: 'https://tube.xy-space.de/videos/embed/agaxTLmrsRKxViHJqPpMDU?controls=1&title=1&peertubeLink=0',
            image: '',
            description: 'Jenaro is one of the few young people who returned to his village in "España vaciada" (emptied Spain). After leaving his place to study, he now works with his home soils to produce food, keeping the rural style of living alive. But a fossil gas pipeline already passes right below his village and the H2Med might follow soon. Soon natural gas and hydrogen might be produced in places where he now grows food for his region. Listen to his emotional testimony and how he organises against biogas in the province of Zamora!',
            location: {
                center: [-5.684657899515735, 41.36324204229561],
                zoom: 13,
                pitch: 30,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hydrogen-colonialism1',
            alignment: 'left',
            hidden: false,
            title: "Energy colonialism at Europe's edges",
            video: 'https://tube.xy-space.de/videos/embed/ucKFDeM6udG8dNFnLbo9t5?controls=1&title=1&peertubeLink=0',
            image: '',
            description: 'Julio denounces energy colonialism in the peripheral regions of Europe. With Ecologistas en Acción Extremadura he says: "We produce energy for industrial centres all over Europe to power their economic growth. This is not new. We already had hydropower as the first wave of energy colonialism and nuclear power as the second wave." Conditions are different than in the Global South, he acknowledges, but processes and structures are the same.',
            location: {
              center: [-5.69827, 39.80851],
              zoom: 11.82,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'damsExtr',
                     opacity: 0
                },
                {
                     layer: 'strokes',
                     opacity: 1,
                     duration: 300
                },
                {
                     layer: 'reservoirsExtrLine',
                     opacity: 1
                },
                {
                     layer: 'squares',
                     opacity: 1
                },
                {
                     layer: 'solars-outline',
                     opacity: 1
                },
                {
                     layer: 'nuclear-labels',
                     opacity: 0
                },
            ],
            onChapterExit: [
                {
                     layer: 'damsExtr',
                     opacity: 0
                },
                {
                     layer: 'strokes',
                     opacity: 0
                },
                                {
                     layer: 'reservoirsExtrLine',
                     opacity: 0
                },
                                {
                     layer: 'squares',
                     opacity: 0
                },
                {
                     layer: 'solars-outline',
                     opacity: 0
                },
                {
                     layer: 'nuclear-labels',
                     opacity: 0
                },
            ]
        },
        {
            id: 'hydrogen-colonialism2',
            alignment: 'left',
            hidden: false,
            title: 'The historical continuities of energy colonialism in Spain',
            image: '',
            description: 'Energy colonialism in Extremadura comes in waves. In the 1960s, large reservoirs were built along the Tajo River, officially for irrigation but mainly to generate hydropower. This was the first wave in which energy produced in the region was sent elsewhere. The second wave: under the Franco dictatorship, two nuclear reactors were built in Extremadura, with around 2000 megawatts of capacity. Again, energy was exported while the risks stayed local. Today, Extremadura produces six times more energy than it consumes, yet remains economically marginalized. The pattern is clear: the region powers others, while the benefits leave and the costs remain.',
            location: {
                center: [-6.37464, 46.19577],
                zoom: 4.4,
                pitch: 41,
                bearing: 67.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hydrogen-use',
            alignment: 'left',
            hidden: false,
            title: 'ThyssenKrupp steel and weapon manufacturing, Duisburg',
            image: '',
            description: 'Hydrogen from the south is not just about climate goals. It is set to flow north into industrial hubs like the Ruhr area, where companies like ThyssenKrupp plan to use it for "green" steel. While this may reduce emissions, it also sustains energy-intensive industries that depend on continuous growth. We need some steel for public infrastructure or hospitals. But at the same time, steel remains a key material for automotive production, and military equipment. As Europe increases military spending, hydrogen-fueled steel production is becoming part of a broader push to secure resources for rearmament. <br>Hydrogen can play a role in decarbonising essential sectors. But current plans go far beyond that. The scale of proposed infrastructure reflects not just climate ambitions, but also industrial expansion and growing militarisation under the label of a “green” transition.',
            location: {
                center: [6.69502, 51.49364],
                zoom: 12.0,
                pitch: 33,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
        {
            id: 'resistance-grow',
            alignment: 'right',
            hidden: false,
            title: 'Resistance along the pipeline grows',
            video: 'https://tube.xy-space.de/videos/embed/2vrw4jUZ5MbBM9GnDqW2To?controls=1&title=1&peertubeLink=0',
            image: '',
            description: "Along the pipeline, communities resist these energy colonial processes. They don't want to be a self-service store for Europe, they don't want a pipeline labelled as green while most of what runs through it, is of fossil origin. They are in favor of a transition towards renewable energy sources. But they demand that this transition keeps in mind the needs of rural populations and is not only governed by the fossil industry to keep up a business model that ruins people and planet.",
            location: {
                center: [-6, 40.57],
                zoom: 5.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'alternatives-exist',
            alignment: 'center',
            hidden: false,
            title: 'Alternatives to this mess exist',
            video: 'https://tube.xy-space.de/videos/embed/xdq9zpFR3hAmQH4CwwGSWs?controls=1&title=1&peertubeLink=0',
            image: '',
            description: "The solutions we see are energy communities. But right now, much of our work is about defending territory, because there are so many projects we need to stop. It is frustrating that so much of our energy in activism goes into resisting these developments, when we could actually be building the futures we want. That creates a lot of anger. But at the same time, I still think there is hope.'",
            location: {
                center: [-6.444266284280316, 43.547253298255548],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
