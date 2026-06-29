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
            title: 'La red de gasoductos de hidrógeno prevista',
            // image: './assets/arcelor-mittal-surf.JPG',
            description: 'Europa tiene previsto construir una gran red de gasoductos para transportar hidrógeno y gas fósil. Se prevé que la mayor parte del hidrógeno transportado proceda del norte de África y de zonas rurales del sur de Europa. El hidrógeno "verde" se considera ampliamente como una solución «sostenible» para un crecimiento económico e industrial infinito sin emisiones de CO₂, y como una solución única para la crisis climática en la que nos encontramos. Sin embargo, a lo largo del trazado de los gasoductos, las comunidades cuestionan este discurso, ya que sufren los impactos sobre las personas y el territorio. Están construyendo su propio futuro en resistencia a esta mega infraestructura energética.',
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
            title: 'El gasoducto H2Med',
            // image: './assets/washington-dc.jpg',
            description: 'El gasoducto H2Med, actualmente en proyecto, está destinado a transportar energía desde la Península Ibérica hasta el oeste de Alemania. En nombre de la transición "verde", el gasoducto debería exportar grandes cantidades de hidrógeno a lo largo de más de 2000 km. Sin embargo, esta megaestructura no puede cumplir las promesas que se han hecho. Ésta es la situación:<ol><li>Se da prioridad a la exportación de energía a gran escala frente al uso local vinculado a las necesidades.</li><li>La producción industrial de hidrógeno agrava los conflictos por la tierra, el agua y las energías renovables.</li><li>El hidrógeno permite a las industrias fósiles prolongar el uso de los combustibles fósiles mediante la mezcla.</li></ol> Este mapa cuenta las historias de personas y colectivos en resitencia. Desmontan mitos, sabotean gasoductos y construyen futuros alternativos. ¡Desplázate hacia abajo y síguenos!',
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
            title: '¿Exportación por encima del uso local?',
            video: 'https://tube.xy-space.de/videos/embed/9miGr4SKwABhae1Q5FD9Ge?controls=1&title=1&peertubeLink=0',
            //image: './assets/IMG_3135.JPG',
            description: 'Conocimos a Paco en el puerto de Xixón. Aquí confluyen dos gasoductos de la red, está previsto un almacén de hidrógeno y existe una terminal de Gas Natural Licuado para el transporte marítimo de gas fósil. Paco, de Ecoloxistes n’Aición d’Asturies, critica la infraestructura desmesurada para la exportación de gas, tanto aquí como en toda la Península Ibérica. Aunque el hidrógeno producido localmente puede ser una forma útil de abastecer a las industrias pesadas, el desarrollo actual apunta en la dirección opuesta. Este sistema no se basa en "hidrógeno que se produce y se utiliza localmente, cerca de donde se necesita", sino que "beneficia principalmente a las grandes empresas energéticas, que están interesadas sobre todo en ampliar sus propias redes de infraestructuras", afirma Paco.
',
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
            title: 'La transición que deseamos',
            video: 'https://tube.xy-space.de/videos/embed/89jspk61pPWQYwYqWLncVW?controls=1&title=0&peertubeLink=0',
            image: '',
            description: 'César considera que la transición actual deja atrás a las comunidades rurales de las periferias y da prioridad a los centros industriales y urbanos y a su creciente demanda de energía. Nos reunimos con el colectivo SOS Montes Torozos en La Mudarra, un pueblo situado junto a una gran subestación. Las subestaciones son nodos clave del sistema energético, ya que determinan dónde se construyen las infraestructuras de energía e hidrógeno debido a su conectividad con la red. Construidas para sistemas basados en combustibles fósiles, hidroeléctricos y nucleares, ahora se reutilizan para el hidrógeno, lo que refuerza las desigualdades espaciales existentes y margina aún más a las zonas rurales.',
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
            title: 'La exportación de energía por encima de la producción alimentaria',
            video: 'https://tube.xy-space.de/videos/embed/agaxTLmrsRKxViHJqPpMDU?controls=1&title=1&peertubeLink=0',
            image: '',
            description: 'Jenaro es uno de los pocos jóvenes que regresó a su pueblo en la «España vaciada». Tras marcharse de su pueblo para estudiar, ahora trabaja la tierra de su tierra natal para producir alimentos, manteniendo vivo el estilo de vida rural. Pero un gasoducto de gas fósil ya pasa justo por debajo de su pueblo y es posible que el H2Med le siga. Pronto, el gas fósil y el hidrógeno podrían producirse en lugares donde ahora cultiva alimentos para su región. ¡Escucha su emotivo testimonio y cómo se organiza contra el biogás en la provincia de Zamora!',
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
            title: "El colonialismo energético en las fronteras de Europa",
            video: 'https://tube.xy-space.de/videos/embed/ucKFDeM6udG8dNFnLbo9t5?controls=1&title=1&peertubeLink=0',
            image: '',
            description: 'Julio denuncia el colonialismo energético en las regiones periféricas de Europa. Junto con Ecologistas en Acción Extremadura, afirma: «Producimos energía para que los centros industriales de toda Europa impulsen su crecimiento económico. Esto no es nada nuevo. Ya tuvimos la energía hidroeléctrica como primera ola de colonialismo energético y la energía nuclear como segunda ola». Reconoce que las condiciones son diferentes a las del Sur Global, pero los procesos y las estructuras son los mismos.',
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
            title: 'Las continuidades históricas del colonialismo energético en el Estado español',
            image: '',
            description: 'El colonialismo energético en Extremadura se presenta en oleadas. En la década de 1960 se construyeron grandes embalses a lo largo del río Tajo, oficialmente para el riego, pero principalmente para generar energía hidroeléctrica. Esta fue la primera oleada en la que la energía producida en la región se enviaba a otros lugares. La segunda oleada: bajo la dictadura de Franco, se construyeron dos reactores nucleares en Extremadura, con una capacidad de unos 2.000 megavatios. Una vez más, la energía se exportaba, mientras que los riesgos se quedaban en la región. Hoy en día, Extremadura produce seis veces más energía de la que consume, pero sigue estando marginada económicamente. El patrón es claro: la región abastece de energía a otros, mientras que los beneficios se marchan y los impactos se quedan.',
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
            title: 'ThyssenKrupp: fabricación de acero y armamento, Duisburgo',
            image: '',
            description: 'El hidrógeno procedente del sur no solo tiene que ver con los objetivos climáticos. Está previsto que fluya hacia el norte, hacia centros industriales como la cuenca del Ruhr, donde empresas como ThyssenKrupp planean utilizarlo para producir acero "verde". Si bien esto puede reducir las emisiones, también sustenta a industrias que consumen mucha energía y que dependen de un crecimiento continuo. Necesitamos algo de acero para infraestructuras públicas u hospitales. Pero, al mismo tiempo, el acero sigue siendo un material clave para la producción de automóviles y para el equipamiento militar. A medida que Europa aumenta el gasto militar, la producción de acero alimentada con hidrógeno se está convirtiendo en parte de un impulso más amplio para asegurar recursos destinados al rearme. <br>El hidrógeno puede desempeñar un papel en la descarbonización de sectores esenciales. Pero los planes actuales van mucho más allá. La magnitud de las infraestructuras propuestas refleja no solo las ambiciones climáticas, sino también la expansión industrial y la creciente militarización bajo la etiqueta de una transición "verde".',
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
            title: 'Aumenta la resistencia a lo largo del trazado del gasoducto',
            video: 'https://tube.xy-space.de/videos/embed/2vrw4jUZ5MbBM9GnDqW2To?controls=1&title=1&peertubeLink=0',
            image: '',
            description: "A lo largo del trazado del gasoducto, las comunidades se resisten a estos procesos de colonialismo energético.  No quieren ser un "supermercado" para Europa, no quieren un gasoducto etiquetado como "verde" cuando la mayor parte de lo que circula por él es de origen fósil. Están a favor de una transición hacia fuentes de energía renovables. Pero exigen que esta transición tenga en cuenta las necesidades de las poblaciones rurales y no esté gobernada únicamente por la industria de los combustibles fósiles para mantener un modelo de negocio que arruina a las personas y al planeta.",
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
            title: 'Existen alternativas a este desastre',
            video: 'https://tube.xy-space.de/videos/embed/xdq9zpFR3hAmQH4CwwGSWs?controls=1&title=1&peertubeLink=0',
            image: '',
            description: '"Las soluciones que vemos son las comunidades energéticas. Pero ahora mismo, gran parte de nuestro  trabajo consiste en defender el territorio, porque hay muchísimos proyectos que  tenemos que detener. Es frustrante que gran parte de nuestra energía en el activismo se dedique a resistir estos proyectos, cuando en realidad podríamos estar construyendo el futuro que queremos. Eso genera mucha rabia. Pero, al  mismo tiempo, sigo pensando que hay esperanza."',
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
