const embedOptions = {
  actions: false,
  renderer: "svg"
};

vegaEmbed("#chart1", "specs/01_total_trips_line.vg.json", embedOptions);
vegaEmbed("#chart2", "specs/02_total_spend_line.vg.json", embedOptions);
vegaEmbed("#chart3", "specs/03_purpose_grouped_bar.vg.json", embedOptions);
vegaEmbed("#chart4", "specs/04_purpose_stacked_bar.vg.json", embedOptions);
vegaEmbed("#chart5", "specs/05_purpose_nights_dot_plot.vg.json", embedOptions);
vegaEmbed("#chart6", "specs/06_state_spend_ranked_bar.vg.json", embedOptions);
vegaEmbed("#chart7", "specs/07_state_trips_lollipop.vg.json", embedOptions);
vegaEmbed("#chart8", "specs/08_day_vs_overnight_dumbbell.vg.json", embedOptions);
vegaEmbed("#chart9", "specs/09_purpose_slope_graph.vg.json", embedOptions);
vegaEmbed("#chart10", "specs/10_trips_vs_spend_scatter.vg.json", embedOptions);
vegaEmbed("#map", "specs/11_state_choropleth_map.vg.json", embedOptions);