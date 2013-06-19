var MainView = Backbone.View.extend({
  id: 'projects',
  render: function() {
    this.$el.append(Handlebars.templates.main());
    this.renderProjects();
    return this;
  },

  renderProjects: function() {
    var labels = $("a[href*=label]").clone();
    var self = this;
    labels.each(function(i, el) {
      $element = $(el);
      var project = {
        name: $element.html(),
        link: $element[0],
        projectId: $element.html().replace(' ', '_').replace('/', '-').toLowerCase()
      }
      var projectView = new ProjectView(project);
      self.$('#project-list').append(projectView.render().$el);
    })

  }
});

var ProjectView = Backbone.View.extend({
  className: 'project',
  initialize: function(project) {
    this.project = project;
  },

  render: function() {
    if(!this.gmailLabels(this.project.name)) {
      this.$el.html(Handlebars.templates.project({
        name: this.project.name,
        link: this.project.link,
        id: this.project.projectId
      }));
    }
    return this;
  },

  gmailLabels: function(title) {
    var gmailTitles = ["Drafts", "Sent", "Trash", "Deleted Messages", "Notes", "labels"]
    return _.any(gmailTitles, function(t) {
      return title.match(new RegExp(t))
    });
  }
})
