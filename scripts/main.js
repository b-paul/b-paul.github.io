---
# Front matter to enable liquid tags
---

{% include lib/jquery/dist/jquery.min.js %}
{% include lib/jquery.powertip-1.2.0/jquery.powertip.min.js %}

$(function () {
  $('.skill').powerTip({
    followMouse: true
  });
});
