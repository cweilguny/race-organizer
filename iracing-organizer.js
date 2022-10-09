const tracks = {
    'OKAY': 'Okayama',
    'DAYT': 'Daytona',
    'BARC': 'Barcelona',
    'BARN': 'Barcelona (National)',
    'RATL': 'Road Atlanta',
    'OSCH': 'Oschersleben',
    'SEBR': 'Sebring',
    'SPAF': 'Spa',
    'WATB': 'Watkins Glen',
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
    'CHAR': 'Charlotte Motor Speedway'
};

const series = [
    {
        id: 'PCUP',
        bgColor: '#25395e',
        tracks: ['WATB', 'RATL', 'REDB', 'MONZ', 'FUJI', 'SPAF', 'HOCK', 'IMOL', 'PHIL', 'MOPA', 'CARL', 'NORC']
    },
    {
        id: 'GT3',
        bgColor: '#258278',
        tracks: ['ROAM', 'MOTE', 'RATL', 'LAGU', 'SNET', 'BARC', 'OSCH', 'COTA', 'SUZU', 'RUDS', 'INDY', 'REDB']
    },
    {
        id: 'GT4',
        bgColor: '#615299',
        tracks: ['OKAY', 'DAYT', 'BARN', 'RATL', 'OSCH', 'SEBR', 'SAND', 'NORC', 'MIDO', 'ROAM', 'RUDS', 'LAGU']
    },
    {
        id: 'TCR',
        bgColor: '#000000',
        tracks: ['SPAF', 'DAYT', 'OSCH', 'RATL', 'DONN', 'SEBR', 'OULT', 'NORC', 'RUDS', 'ROAM', 'REDB', 'LAGU']
    },
    {
        id: 'SR10',
        bgColor: '#f6c919',
        tracks: ['SPAF', 'OKAY', 'CARL', 'LEMA', 'WATB', 'MIDO', 'FUJI', 'ROAM', 'MONZ', 'CANT', 'MOPA', 'NORD']
    },
    {
        id: 'LMP2',
        bgColor: '#3ed003',
        tracks: ['INDY', 'LAGU', 'CANT', 'RATL', 'HOCK', 'FUJI', 'SEBR', 'SUZU', 'ROAM', 'CHAR', 'IMOL', 'DAYT']
    }
];

const weeks = [
    'Sep 13', 'Sep 20', 'Sep 27', 'Oct 04',
    'Oct 11', 'Oct 18', 'Oct 25', 'Nov 01',
    'Nov 08', 'Nov 15', 'Nov 22', 'Nov 29'
]

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
    html += '<div class="week col-sm-12 col-lg-4 px-0"><div id="week' + week + '" class="week-inner">';
    html += '   <div class="week-description">';
    html += '       <span class="week-number">#' + week + '</span>';
    html += '       // ';
    html += '       <span class="week-date">' + weeks[week - 1] + '</span>';
    html += '   </div>';
    html += '<div class="clearfix"></div>';
    html += '</div></div>';
    return html;

}

function weekSeriesHtml(week, serie, track) {
    let html = '';
    html += '<div id="W' + week + '-' + serie.id + '" class="serie-line">';
    html += '<span class="serie-name" style="background-color: ' + serie.bgColor + '">' + serie.id + '</span>';
    html += '<span class="track-name">' + tracks[track] + '</span>';
    html += '</div>'
    return html;
}

$(() => {
    buildTable();
});