const seasonStart = '2022-12-13';

const tracks = {
    'OKAY': 'Okayama',
    'DAYT': 'Daytona',
    'BARC': 'Barcelona',
    'BARN': 'Barcelona (National)',
    'BARH': 'Barcelona (Historic)',
    'RATL': 'Road Atlanta',
    'OSCH': 'Oschersleben',
    'SEBR': 'Sebring',
    'SPAF': 'Spa',
    'WATB': 'Watkins Glen',
    'WATC': 'Watkins Glen Classic Boot',
    'ROAM': 'Road America',
    'INDY': 'Indianapolis',
    'MOTE': 'Motegi',
    'LAGU': 'Laguna Seca',
    'REDB': 'Red Bull Ring',
    'CARL': 'Autódromo José Carlos Pace',
    'CANT': 'Canadian Tire Motorsports Park',
    'MONZ': 'Monza',
    'LEMA': 'Le Mans',
    'DONN': 'Donington (National)',
    'FUJI': 'Fuji',
    'SNET': 'Snetterton',
    'HOCK': 'Hockenheim',
    'SILV': 'Silverstone',
    'MIDO': 'Mid-Ohio',
    'SAND': 'Sandown',
    'OULT': 'Oulton Park',
    'NORD': 'Nordschleife',
    'NORC': 'Nordschleife (Combined)',
    'IMOL': 'Imola',
    'COTA': 'Circuit of the Americas',
    'SUZU': 'Suzuka',
    'RUDS': 'Rudskogen Motorsenter',
    'PHIL': 'Phillip Island',
    'MOPA': 'Mount Panorama',
    'CHAR': 'Charlotte Motor Speedway',
    'MAGN': 'Magny Cours',
    'DETR': 'Detroit Grand Prix at Belle Isle',
    'BRAN': 'Brands Hatch',
    'SONO': 'Sonoma Raceway',
    'ORAN': 'Oran Park Raceway',
    'TSUK': 'Tsukuba Circuit',
    'NURB': 'Nürburgring',
    'VIRG': 'Virginia International Raceway',
    'LIME': 'Lime Rock Park',
    'LONG': 'Long Beach Street Circuit',
    'GIVI': 'Circuit Gilles Villeneuve',
    'HUNG': 'Hungaroring',
    'SUMM': 'Summit Point Raceway',
};

const series = [
    {
        id: 'PCUP',
        bgColor: '#25395e',
        tracks: ['OULT', 'CARL', 'CANT', 'MAGN', 'HOCK', 'SILV', 'RUDS', 'DETR', 'ROAM', 'BARH', 'SEBR', 'NORC']
    },
    {
        id: 'GT3',
        bgColor: '#258278',
        tracks: ['MONZ', 'BRAN', 'SPAF', 'SILV', 'DAYT', 'RUDS', 'MAGN', 'CARL', 'MOPA', 'SONO', 'OKAY', 'LEMA']
    },
    {
        id: 'GT4',
        bgColor: '#615299',
        tracks: ['ORAN', 'RATL', 'OSCH', 'DAYT', 'MAGN', 'MOPA', 'FUJI', 'BRAN', 'TSUK', 'SEBR', 'NURB', 'ROAM']
    },
    {
        id: 'IMSA',
        bgColor: '#373839',
        tracks: ['CARL', 'BARH', 'WATB', 'INDY', 'MAGN', 'DAYT', 'LONG', 'VIRG', 'NURB', 'ROAM', 'DETR', 'SEBR']
    },
    {
        id: 'IMSP',
        bgColor: '#045ca8',
        tracks: ['', 'RATL', '', 'DAYT', '', 'MOPA', '', 'BRAN', '', 'SEBR', '', 'ROAM']
    },
    {
        id: 'iR-04',
        bgColor: '#672302',
        tracks: ['RUDS', 'LONG', 'MONZ', 'MOPA', 'BARC', 'OKAY', 'RATL', 'GIVI', 'SILV', 'OULT', 'ROAM', 'HUNG']
    }
];

function buildTable() {
    for (let i = 1; i <= 12; i++) {
        $('#content').append(weekHtml(i));
    }
    series.forEach(serie => {
        serie.tracks.forEach((track, i) => {
            $('#week' + (i + 1)).append(weekSeriesHtml(i + 1, serie, track));
        })
    });
}

function weekHtml(week) {
    let html = '';
    const weekStart = calcWeekStart(week);
    const currentWeekClass = isCurrentWeek(weekStart) ? ' current-week' : '';
    html += '<div class="week col-sm-6 col-md-6 col-lg-3 px-0"><div id="week' + week + '" class="week-inner' + currentWeekClass + '">';
    html += '   <div class="week-description">';
    html += '       <span class="week-number">' + week + '</span>';
    html += '       <span class="week-date">' + monthName(weekStart) + '</span>';
    html += '   </div>';
    html += '<div class="clearfix"></div>';
    html += '</div></div>';
    return html;

}

function calcWeekStart(week) {
    const firstWeek = new Date(seasonStart);
    firstWeek.setDate(firstWeek.getDate() + (week - 1) * 7);
    return firstWeek;
}

function isCurrentWeek(weekStart) {
    const now = new Date();
    return now >= weekStart && now.getTime() < (weekStart.getTime() + 7 * 24 * 3600 * 1000);
}

function monthName(date) {
    return date.toLocaleString('default', { month: 'short' }) + ' ' + date.toLocaleString('default', { day: '2-digit' });
}

function weekSeriesHtml(week, serie, track) {
    let html = '';
    html += '<div id="W' + week + '-' + serie.id + '" class="serie-line">';
    html += '<span class="serie-name" style="background-color: ' + serie.bgColor + '">' + serie.id + '</span>';
    html += '<span class="track-name">' + (tracks[track] || track) + '</span>';
    html += '</div>'
    return html;
}

$(() => {
    buildTable();
});