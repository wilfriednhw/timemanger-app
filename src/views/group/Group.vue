<template>
  <div class="group_view layout">
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      "
    >
      <h2 class="label">Teams list</h2>

      <div style="width: 20vw; text-align: right">
        <button class="btn btn_submit">Go back</button>
      </div>
    </div>

    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
      "
    >
      <div class="group_list">
        <div class="group_item card card_active">
          <div class="group_item_infos">
            <div>
              <span class="label title">Name:</span
              ><span class="value">Team Frontend</span>
            </div>
            <div>
              <span class="label title">Manager:</span><span>John Doe</span>
            </div>
            <div>
              <span class="label title">Members:</span
              ><span
                >John Doe, Guilaine Lopez, Willy Boy, Alessandro Aldama, Leonel
                Messi</span
              >
            </div>
          </div>
          <div>
            <img class="icon_action" :src="edit_icon" alt="edit" />
          </div>
        </div>

        <div class="group_item card">
          <div class="group_item_infos">
            <div>
              <span class="label title">Name:</span
              ><span class="value">Team Frontend</span>
            </div>
            <div>
              <span class="label title">Manager:</span><span>John Doe</span>
            </div>
            <div>
              <span class="label title">Members:</span
              ><span
                >John Doe, Guilaine Lopez, Willy Boy, Alessandro Aldama, Leonel
                Messi</span
              >
            </div>
          </div>
          <div>
            <img class="icon_action" :src="edit_icon" alt="edit" />
          </div>
        </div>

        <div class="group_item card">
          <div class="group_item_infos">
            <div>
              <span class="label title">Name:</span
              ><span class="value">Team Frontend</span>
            </div>
            <div>
              <span class="label title">Manager:</span><span>John Doe</span>
            </div>
            <div>
              <span class="label title">Members:</span
              ><span
                >John Doe, Guilaine Lopez, Willy Boy, Alessandro Aldama, Leonel
                Messi</span
              >
            </div>
          </div>
          <div>
            <img class="icon_action" :src="edit_icon" alt="edit" />
          </div>
        </div>

        <div class="group_item card">
          <div class="group_item_infos">
            <div>
              <span class="label title">Name:</span
              ><span class="value">Team Frontend</span>
            </div>
            <div>
              <span class="label title">Manager:</span><span>John Doe</span>
            </div>
            <div>
              <span class="label title">Members:</span
              ><span
                >John Doe, Guilaine Lopez, Willy Boy, Alessandro Aldama, Leonel
                Messi</span
              >
            </div>
          </div>
          <div>
            <img class="icon_action" :src="edit_icon" alt="edit" />
          </div>
        </div>
      </div>

      <div class="form_add">
        <h4 style="margin-bottom: 20px" class="label title">Add Team</h4>
        <div class="form_container">
          <div>
            <label class="input_bloc">
              <span class="label">Team name: </span>
              <input
                class="input_text"
                type="text"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div>
            <label class="input_bloc">
              <span class="label">Manager : </span>
              <select class="input_text">
                <option>Manager 1</option>
                <option>Manager 2</option>
                <option>Manager 3</option>
                <option>Manager 4</option>
              </select>
            </label>
          </div>

          <div style="min-width: 30px">
            <button class="btn btn_submit">Add</button>
          </div>

          <div
            style="
              min-width: 30px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-top: 30px;
            "
          >
            <button class="btn btn_del">Delete</button>
            <button class="btn btn_submit">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import edit_icon from "../../assets/images/edit_icon.png";
export default {
  name: "Group",
  data() {
    return {
      edit_icon,
    };
  },
  methods: {},
};
</script>
